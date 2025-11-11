import { Box, Button, styled } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import { useRef, useState } from 'react'
import { Controller, useForm, type FieldErrors } from 'react-hook-form'
import { sendMessage } from '../../api/telegram'
import { CustomInput } from '../components/custom-input'
import { CustomRadio } from '../components/custom-radio'
import { CustomSelect } from '../components/custom-select'
import {
	dataAdditionally,
	dataCompositionalElements,
	dataExploitationPeriods,
	dataFlowerGarden,
	dataFunctionalZoning,
	dataGroundWaterLevel,
	dataLandscapeStyles,
	dataMaterialsUsed,
	dataProblemsArea,
	dataRelief,
	dataResidenceTime,
	dataServiceType,
	dataSoil,
	dataSpecialProjects,
	dataSpecialWishes,
	dataWhoTakesCareGarden,
	defaultFormValues,
} from '../data/form-options'
import { CustomModal } from '../modal/modal'
import s from './form-list.module.scss'

import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, type FormDataType } from '../validation/form-schema'

const MuiTelInputCustom = styled(MuiTelInput)`
	& input {
		height: 48px;
	}
`

const FormList = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isOpenModal, setIsOpenModal] = useState(false)
	const phoneRef = useRef<HTMLInputElement | null>(null)
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setFocus,
	} = useForm<FormDataType>({
		defaultValues: defaultFormValues,
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: FormDataType) => {
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

	const onError = (errors: FieldErrors<FormDataType>) => {
		const firstField = Object.keys(errors)[0] as keyof FormDataType
		  if (firstField === 'phone' && phoneRef.current) {
				phoneRef.current.focus()
			} else {
				setFocus(firstField)
			}
	}

	return (
		<div className={s.wrapper}>
			<Box
				sx={{
					maxWidth: 600,
					mx: 'auto',
					p: 3,
				}}
			>
				<div className={s.topBlock}>
					<h3 className={s.title}>Оставте заявку и мы с вами свяжемся</h3>
				</div>
				<form className={s.form} onSubmit={handleSubmit(onSubmit, onError)} noValidate>
					<CustomInput name="name" label="ФИО" control={control} errors={errors.name} required />
					<CustomInput name="email" label="E-mail" control={control} />
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<MuiTelInputCustom
								{...field}
								inputRef={(el) => {
									field.ref(el)
									phoneRef.current = el
								}}
								required
								value={field.value ?? ''}
								label="Номер телефона"
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
								sx={{ marginTop: '1rem' }}
							/>
						)}
					/>
					<CustomInput name="address" label="Адрес/кадастровый номер объекта" control={control} />
					<CustomRadio name="serviceType" label="Тип услуги" items={dataServiceType} control={control} />
					<CustomInput name="familyComposition" label="Состав семьи" control={control} />
					<CustomInput name="customerAge" label="Возраст заказчика" control={control} />
					<CustomInput name="children" label="Дети (пол/возвраст)" control={control} />
					<CustomInput name="allergy" label="Есть аллергия на определённые виды растений" control={control} />
					<CustomRadio name="residenceTime" label="Время проживания" items={dataResidenceTime} control={control} />
					<CustomInput name="pets" label="Домашние животные" control={control} />
					<CustomInput name="plotArea" label="Общая площадь участка" control={control} />
					<CustomInput name="buildings" label="Существующие постройки" control={control} />
					<CustomInput name="plants" label="Существующая древесно-кустарниковая растительность" control={control} />
					<CustomRadio name="relief" label="Рельеф участка" items={dataRelief} control={control} />
					<CustomRadio name="soil" label="Почва" items={dataSoil} control={control} />
					<CustomRadio
						name="groundWaterLevel"
						label="Уровень грунтовых вод"
						items={dataGroundWaterLevel}
						control={control}
					/>
					<CustomSelect
						name="exploitationPeriods"
						items={dataExploitationPeriods}
						control={control}
						label="Период эксплуатации сада"
					/>
					<CustomInput name="whatToSave" label="Какие элементы в саду необходимо сохранить" control={control} />
					<CustomInput
						name="whatToRemoveAndReplant"
						label="Какие деревья, насаждения, которые нужно убрать/пересадить"
						control={control}
					/>
					<CustomSelect
						name="problemsArea"
						items={dataProblemsArea}
						control={control}
						label="Существующие проблемы зоны участка"
					/>
					<CustomSelect
						name="specialProjects"
						items={dataSpecialProjects}
						control={control}
						label="Необходимость специальных проектов"
					/>
					<CustomSelect
						name="functionalZoning"
						items={dataFunctionalZoning}
						control={control}
						label="Функциональное зонирование участка"
					/>
					<CustomSelect
						name="compositionalElements"
						items={dataCompositionalElements}
						control={control}
						label="Желаемые композиционные элементы"
					/>
					<CustomInput name="fruitCrops" label="Плодовые культуры (вид/кол-во)" control={control} />
					<CustomInput name="berryCrops" label="Ягодные культуры (вид/кол-во)" control={control} />
					<CustomInput name="herbs" label="Пряно-ароматные травы" control={control} />
					<CustomInput name="treesAndShrubs" label="Хвойные деревья и кустарники" control={control} />
					<CustomSelect name="flowerGarden" items={dataFlowerGarden} control={control} label="Устройство цветников" />
					<CustomInput name="favoritePlants" label="Растения, которые особо привлекают " control={control} />
					<CustomInput name="unlovedPlants" label="Растения, которые не хотели бы видеть" control={control} />
					<CustomSelect
						name="materialsUsed"
						items={dataMaterialsUsed}
						control={control}
						label="Предпочтения по используемым материалам"
					/>
					<CustomInput name="favoriteColors" label="Какие цвета привлекают" control={control} />
					<CustomInput name="unlovedColors" label="Какие цвета отталкивают" control={control} />
					<CustomSelect
						name="landscapeStyles"
						items={dataLandscapeStyles}
						control={control}
						label="Предпочтения по стилям"
					/>
					<CustomRadio
						name="whoTakesCareGarden"
						label="Кто ухаживает за садом"
						items={dataWhoTakesCareGarden}
						control={control}
					/>
					<CustomSelect name="specialWishes" items={dataSpecialWishes} control={control} label="Особые пожелания" />
					<CustomSelect name="additionally" items={dataAdditionally} control={control} label="Дополнительно" />
					<CustomInput name="otherWishes" label="Другие пожелания" control={control} />
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
		</div>
	)
}

export default FormList
