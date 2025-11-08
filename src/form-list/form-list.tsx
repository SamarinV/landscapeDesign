import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, styled } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
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
	dataWhoTakesCareGarden,
} from '../data/form-options'
import { CustomModal } from '../modal/modal'
import type { FormData } from '../types/types'
import s from './form-list.module.scss'

const schema: yup.ObjectSchema<FormData> = yup.object({
	name: yup.string().required('Введите ФИО'),
	email: yup.string(),
	phone: yup.string(),
	address: yup.string(),
	serviceType: yup.string(),
	// email: yup.string().email('Некорректный email').required('Введите email'),
	// phone: yup
	// 	.string()
	// 	.test('is-valid-phone', 'Некорректный телефон', (v) => (v ? matchIsValidTel(v) : false))
	// 	.required('Введите телефон'),
	// address: yup.string(),
	// serviceType: yup.string().required('Выберите тип услуги'),
	familyComposition: yup.string(),
	customerAge: yup.string(),
	children: yup.string(),
	allergy: yup.string(),
	residenceTime: yup.string(),
	pets: yup.string(),
	plotArea: yup.string(),
	buildings: yup.string(),
	plants: yup.string(),
	relief: yup.string(),
	soil: yup.string(),
	groundWaterLevel: yup.string(),
	exploitationPeriodSpring: yup.boolean(),
	exploitationPeriodSummer: yup.boolean(),
	exploitationPeriodAutumn: yup.boolean(),
	exploitationPeriodWinter: yup.boolean(),
	whatToSave: yup.string(),
	whatToRemoveAndReplant: yup.string(),
	problemStagnantWater: yup.boolean(),
	problemFrivolity: yup.boolean(),
	problemMasking: yup.boolean(),
	parking: yup.boolean(),
	garbageContainer: yup.boolean(),
	compostHeap: yup.boolean(),
	woodCutter: yup.boolean(),
	enclosureForPets: yup.boolean(),
	greenHouse: yup.boolean(),
	sportsGround: yup.boolean(),
	playGround: yup.boolean(),
	recreationArea: yup.boolean(),
	barbecue: yup.boolean(),
	swimmingPool: yup.boolean(),
	vegetableGarden: yup.boolean(),
	smallArchitecturalForms: yup.boolean(),
	pond: yup.boolean(),
	stream: yup.boolean(),
	waterfall: yup.boolean(),
	rockGarden: yup.boolean(),
	dryStream: yup.boolean(),
	fruitCrops: yup.string(),
	berryCrops: yup.string(),
	herbs: yup.string(),
	treesAndShrubs: yup.string(),
	annualCrops: yup.boolean(),
	perennialCrops: yup.boolean(),
	continuousFlowering: yup.boolean(),
	rosaries: yup.boolean(),
	favoritePlants: yup.string(),
	unlovedPlants: yup.string(),
	wood: yup.boolean(),
	stone: yup.boolean(),
	metalForging: yup.boolean(),
	concrete: yup.boolean(),
	decorativeCrushedStone: yup.boolean(),
	favoriteColors: yup.string(),
	unlovedColors: yup.string(),

	regularStyle: yup.boolean(),
	ecoStyle: yup.boolean(),
	alpineStyle: yup.boolean(),
	orientalStyle: yup.boolean(),
	russianStyle: yup.boolean(),
	highTechStyle: yup.boolean(),
	minimalismStyle: yup.boolean(),
	japaneseGardenStyle: yup.boolean(),
	whoTakesCareGarden: yup.string(),
	barrierFree: yup.boolean(),
	lowMaintenanceGarden: yup.boolean(),
	lightingSystem: yup.boolean(),
	irrigationSystem: yup.boolean(),
	drainageSystem: yup.boolean(),
	otherWishes: yup.string(),
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
			name: '',
			email: '',
			phone: '',
			address: '',
			serviceType: '',
			familyComposition: '',
			customerAge: '',
			children: '',
			allergy: '',
			residenceTime: '',
			pets: '',
			plotArea: '',
			buildings: '',
			plants: '',
			relief: '',
			soil: '',
			groundWaterLevel: '',
			exploitationPeriodSpring: false,
			exploitationPeriodSummer: false,
			exploitationPeriodAutumn: false,
			exploitationPeriodWinter: false,
			whatToSave: '',
			whatToRemoveAndReplant: '',
			problemStagnantWater: false,
			problemFrivolity: false,
			problemMasking: false,
			parking: false,
			garbageContainer: false,
			compostHeap: false,
			woodCutter: false,
			enclosureForPets: false,
			greenHouse: false,
			sportsGround: false,
			playGround: false,
			recreationArea: false,
			barbecue: false,
			swimmingPool: false,
			vegetableGarden: false,
			smallArchitecturalForms: false,
			pond: false,
			stream: false,
			waterfall: false,
			rockGarden: false,
			dryStream: false,
			fruitCrops: '',
			berryCrops: '',
			herbs: '',
			treesAndShrubs: '',
			annualCrops: '',
			perennialCrops: '',
			continuousFlowering: '',
			rosaries: '',
			favoritePlants: '',
			unlovedPlants: '',
			wood: false,
			stone: false,
			metalForging: false,
			concrete: false,
			decorativeCrushedStone: false,
			favoriteColors: '',
			unlovedColors: '',
			regularStyle: false,
			ecoStyle: false,
			alpineStyle: false,
			orientalStyle: false,
			russianStyle: false,
			highTechStyle: false,
			minimalismStyle: false,
			japaneseGardenStyle: false,
			whoTakesCareGarden: '',
			barrierFree: false,
			lowMaintenanceGarden: false,
			lightingSystem: false,
			irrigationSystem: false,
			drainageSystem: false,
			otherWishes: '',
		},

		resolver: yupResolver(schema),
	})

	const onSubmit = async (data: FormData) => {
		console.log('values: ' + data)
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
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<CustomInput name="name" label="ФИО" control={control} errors={errors.name} required />
					<CustomInput name="email" label="E-mail" control={control} errors={errors.email} />
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<MuiTelInputCustom
								{...field}
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
					<CustomInput
						name="address"
						label="Адрес/кадастровый номер объекта"
						control={control}
						errors={errors.address}
					/>
					<CustomRadio
						name="serviceType"
						label="Тип услуги"
						items={dataServiceType}
						control={control}
						errors={errors.serviceType}
					/>
					<CustomInput
						name="familyComposition"
						label="Состав семьи"
						control={control}
						errors={errors.familyComposition}
					/>
					<CustomInput name="customerAge" label="Возраст заказчика" control={control} errors={errors.customerAge} />
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
					<CustomSelect items={dataExploitationPeriods} control={control} label="Период эксплуатации сада" />
					<CustomInput name="whatToSave" label="Какие элементы в саду необходимо сохранить" control={control} />
					<CustomInput
						name="whatToRemoveAndReplant"
						label="Какие деревья, насаждения, которые нужно убрать/пересадить"
						control={control}
					/>
					<CustomSelect items={dataProblemsArea} control={control} label="Существующие проблемы зоны участка" />
					<CustomSelect items={dataSpecialProjects} control={control} label="Необходимость специальных проектов" />
					<CustomSelect items={dataFunctionalZoning} control={control} label="Функциональное зонирование участка" />
					<CustomSelect items={dataCompositionalElements} control={control} label="Желаемые композиционные элементы" />
					<CustomInput name="fruitCrops" label="Плодовые культуры (вид/кол-во)" control={control} />
					<CustomInput name="berryCrops" label="Ягодные культуры (вид/кол-во)" control={control} />
					<CustomInput name="herbs" label="Пряно-ароматные травы" control={control} />
					<CustomInput name="treesAndShrubs" label="Хвойные деревья и кустарники" control={control} />
					<CustomSelect items={dataFlowerGarden} control={control} label="Устройство цветников" />
					<CustomInput name="favoritePlants" label="Растения, которые особо привлекают " control={control} />
					<CustomInput name="unlovedPlants" label="Растения, которые не хотели бы видеть" control={control} />
					<CustomSelect items={dataMaterialsUsed} control={control} label="Предпочтения по используемым материалам" />
					<CustomInput name="favoriteColors" label="Какие цвета привлекают" control={control} />
					<CustomInput name="unlovedColors" label="Какие цвета отталкивают" control={control} />
					<CustomSelect items={dataLandscapeStyles} control={control} label="Предпочтения по стилям" />
					<CustomRadio
						name="whoTakesCareGarden"
						label="Кто ухаживает за садом"
						items={dataWhoTakesCareGarden}
						control={control}
					/>
					<CustomSelect items={dataAdditionally} control={control} label="Дополнительно" />
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
