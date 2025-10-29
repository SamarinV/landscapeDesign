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
	TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { sendMessage } from '../../api/telegram'
import type { FormData } from '../types/types'
import { MuiTelInput } from 'mui-tel-input'

const FormList = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [form, setForm] = useState<FormData>({
		firstName: '',
		middleName: '',
		lastName: '',
		email: '',
		country: '',
		phone: '',
		address: '',
		serviceType: '',
		family: '',
		children: '',
		allergies: '',
		livingTime: '',
		peakSeason: '',
		problemArea1: false,
		problemArea2: false,
		problemArea3: false,
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}
	const handlePhoneNumberChange = (value: any) => {
		console.log(value)
	}

	const handleSubmit = async (values: FormData) => {
		console.log('values: ', values)
		try {
			setIsLoading(true)
			await sendMessage(form)
		} catch (error) {
			console.log('error: ', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Box
			sx={{
				maxWidth: 600,
				mx: 'auto',
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				gap: 1,
			}}
		>
			<TextField
				fullWidth
				label="Имя"
				name="firstName"
				value={form.firstName}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<TextField
				fullWidth
				label="Отчество"
				name="middleName"
				value={form.middleName}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<TextField
				fullWidth
				label="Фамилия"
				name="lastName"
				value={form.lastName}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<TextField
				fullWidth
				label="Email"
				name="email"
				value={form.email}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>

			<TextField
				fullWidth
				label="Номер телефона"
				name="phone"
				value={form.phone}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<MuiTelInput value={form.phone} onChange={handlePhoneNumberChange} />
			<TextField
				fullWidth
				label="Адрес объекта"
				name="address"
				value={form.address}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>

			<FormControl component="fieldset" margin="normal">
				<FormLabel sx={{ textAlign: 'left' }} component="legend">
					Тип услуги
				</FormLabel>
				<RadioGroup name="serviceType" value={form.serviceType} onChange={handleInputChange}>
					<FormControlLabel value="ландшафт" control={<Radio />} label="Ландшафт" />
					<FormControlLabel value="сад" control={<Radio />} label="Сад" />
				</RadioGroup>
			</FormControl>

			<TextField
				fullWidth
				label="Состав семьи"
				name="family"
				value={form.family}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<TextField
				fullWidth
				label="Дети (пол, возраст)"
				name="children"
				value={form.children}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>
			<TextField
				fullWidth
				label="Есть ли аллергия на определенные виды растений?"
				name="allergies"
				value={form.allergies}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>

			<FormControl component="fieldset" margin="normal">
				<FormLabel component="legend">Время проживания</FormLabel>
				<RadioGroup name="livingTime" value={form.livingTime} onChange={handleInputChange}>
					<FormControlLabel value="постоянно" control={<Radio />} label="Постоянно" />
					<FormControlLabel value="частично" control={<Radio />} label="Частично" />
				</RadioGroup>
			</FormControl>

			<TextField
				fullWidth
				label="В какое время года садом пользуются наиболее интенсивно?"
				name="peakSeason"
				value={form.peakSeason}
				onChange={handleInputChange}
				margin="normal"
				variant="standard"
			/>

			<FormControl component="fieldset" margin="normal">
				<FormLabel component="legend">Существующие проблемные зоны участка</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={form.problemArea1} onChange={handleInputChange} name="area1" />}
						label="Застой воды"
					/>
					<FormControlLabel
						control={<Checkbox checked={form.problemArea2} onChange={handleInputChange} name="area2" />}
						label="Ветренность"
					/>
					<FormControlLabel
						control={<Checkbox checked={form.problemArea3} onChange={handleInputChange} name="area3" />}
						label="Объекты, требующие маскировки"
					/>
				</FormGroup>
			</FormControl>

			<Button
				variant="contained"
				color="primary"
				fullWidth
				sx={{ mt: 2 }}
				type="button"
				onClick={() => handleSubmit(form)}
			>
				Отправить заявку
			</Button>
			{isLoading && <p>Загрузка</p>}
			<h6>
				«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
				конфиденциальности»
			</h6>
		</Box>
	)
}

export default FormList
