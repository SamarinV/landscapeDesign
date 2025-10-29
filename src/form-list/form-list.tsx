import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Radio,
	RadioGroup,
	styled,
	TextField,
} from '@mui/material'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { sendMessage } from '../../api/telegram'
import type { FormData } from '../types/types'
import s from './form-list.module.scss'
import { CustomModal } from '../modal/modal'

const schema: yup.ObjectSchema<FormData> = yup.object({
	firstName: yup.string().required('Введите имя'),
	lastName: yup.string().required('Введите фамилию'),
	email: yup.string().email('Некорректный email').required('Введите email'),
	phone: yup
		.string()
		.test('is-valid-phone', 'Некорректный телефон', (v) => (v ? matchIsValidTel(v) : false))
		.required('Введите телефон'),
	serviceType: yup.string().required('Выберите тип услуги'),
	address: yup.string(),
	peakSeason: yup.string(),
	problemArea1: yup.boolean(),
	problemArea2: yup.boolean(),
	problemArea3: yup.boolean(),
})

const MuiTelInputCustom = styled(MuiTelInput)`
	& input {
		height: 48px;
	}
`

const FormList = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isOpenModal, setIsOpenModal] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			address: '',
			serviceType: '',
			peakSeason: '',
			problemArea1: false,
			problemArea2: false,
			problemArea3: false,
		},

		resolver: yupResolver(schema),
	})

	const onSubmit = async (data: FormData) => {
		console.log('values: ', data)
		try {
			setIsLoading(true)
			await sendMessage(data)
			setIsOpenModal(true)
		} catch (error) {
			console.log('error: ', error)
		} finally {
			setIsLoading(false)
			reset()
		}
	}

	return (
		<>
			<Box
				sx={{
					maxWidth: 600,
					mx: 'auto',
					p: 2,
				}}
			>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="firstName"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								label="Имя"
								variant="standard"
								error={!!errors.firstName}
								helperText={errors.firstName?.message}
								margin="normal"
							/>
						)}
					/>
					<Controller
						name="lastName"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								label="Фамилия"
								variant="standard"
								error={!!errors.lastName}
								helperText={errors.lastName?.message}
								margin="normal"
							/>
						)}
					/>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								label="Email"
								variant="standard"
								error={!!errors.email}
								helperText={errors.email?.message}
								margin="normal"
							/>
						)}
					/>

					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<MuiTelInputCustom
								{...field}
								fullWidth
								variant="standard"
								defaultCountry="RU"
								placeholder="000-000-00-00"
								autoComplete="true"
								autoCorrect="true"
								forceCallingCode
								focusOnSelectCountry
								preferredCountries={['RU']}
								onChange={(value) => field.onChange(value)}
								error={!!errors.phone}
								helperText={errors.phone?.message}
							/>
						)}
					/>

					<Controller
						name="address"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								label="Адрес объекта"
								variant="standard"
								error={!!errors.address}
								helperText={errors.address?.message}
								margin="normal"
							/>
						)}
					/>

					<FormControl sx={{ marginTop: '15px' }}>
						<FormLabel sx={{ textAlign: 'left' }}>Тип услуги</FormLabel>
						<Controller
							name="serviceType"
							control={control}
							render={({ field }) => (
								<RadioGroup {...field}>
									<FormControlLabel value="ландшафт" control={<Radio />} label="Ландшафт" />
									<FormControlLabel value="сад" control={<Radio />} label="Сад" />
								</RadioGroup>
							)}
						/>
						{errors.serviceType && <p style={{ color: 'red' }}>{errors.serviceType.message}</p>}
					</FormControl>

					<FormControl component="fieldset" margin="normal">
						<FormLabel sx={{ textAlign: 'left' }} component="legend">
							Проблемные зоны
						</FormLabel>
						<FormGroup>
							{['problemArea1', 'problemArea2', 'problemArea3'].map((name) => (
								<Controller
									key={name}
									name={name as keyof FormData}
									control={control}
									render={({ field }) => (
										<FormControlLabel
											control={<Checkbox checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)} />}
											label={name}
										/>
									)}
								/>
							))}
						</FormGroup>
					</FormControl>

					<Button
						loading={isLoading}
						disabled={isSubmitting}
						type="submit"
						variant="contained"
						fullWidth
						sx={{ mt: 2 }}
					>
						Отправить заявку
					</Button>
					<h6>
						«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
						конфиденциальности»
					</h6>
				</form>
			</Box>

			<CustomModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
		</>
	)
}

export default FormList
