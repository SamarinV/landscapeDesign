import type { FormDataType } from '../validation/form-schema'

export const dataExploitationPeriods: string[] = ['весна', 'лето', 'осень', 'зима']
export const dataProblemsArea: string[] = ['застой воды', 'ветренность', 'объекты, требующие маскировки']
export const dataServiceType: string[] = ['выезд-консультация специалиста', 'эскизный проект участка', 'дизайн проект']
export const dataResidenceTime: string[] = ['круглогодично', 'сезонно']
export const dataSoil: string[] = ['чернозем', 'суглинок', 'глинистая']
export const dataRelief: string[] = ['ровный', 'холмистый', 'с уклоном']
export const dataGroundWaterLevel: string[] = ['высокий', 'низкий']
export const dataSpecialProjects: string[] = [
	'дополнительная стоянка или укрытие для машины',
	'место для мусорного контейнера',
	'место для компостной кучи',
	'дровяник',
	'укрытие (вольер) для домашних животных',
	'теплица',
]
export const dataFunctionalZoning: string[] = [
	'спортивная площадка',
	'детская площадка',
	'зона тихого отдыха (беседка/пергола/качели)',
	'барбекю',
	'бассейн',
	'функциональный огород',
]
export const dataCompositionalElements: string[] = [
	'малые архитектурные формы',
	'водоем',
	'ручей',
	'водопад',
	'альпинарий/рокарий',
	'сухой ручей',
]
export const dataFlowerGarden: string[] = [
	'однолетние культуры',
	'многолетние культуры',
	'цветники непрерывного цветения',
	'розарии',
]
export const dataMaterialsUsed: string[] = ['дерево', 'камень', 'металлическая ковка', 'бетон', 'декоративный щебень']
export const dataLandscapeStyles: string[] = [
	'регулярный',
	'эко стиль',
	'альпийский',
	'восточный',
	'русский',
	'хай-тек',
	'минимализм',
	'японский сад',
]
export const dataSpecialWishes: string[] = ['безбарьерная среда', 'малоуходный сад']
export const dataAdditionally: string[] = ['система освещения', 'система полива', 'система дренажа']
export const dataWhoTakesCareGarden: string[] = ['самостоятельно', 'садовник']

export const defaultFormValues: FormDataType = {
	name: 'Vladimir',
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
	exploitationPeriods: [],
	whatToSave: '',
	whatToRemoveAndReplant: '',
	problemsArea: [],
	specialProjects: [],
	functionalZoning: [],
	compositionalElements: [],
	fruitCrops: '',
	berryCrops: '',
	herbs: '',
	treesAndShrubs: '',
	flowerGarden: [],
	favoritePlants: '',
	unlovedPlants: '',
	materialsUsed: [],
	favoriteColors: '',
	unlovedColors: '',
	landscapeStyles: [],
	whoTakesCareGarden: '',
	specialWishes: [],
	additionally: [],
	otherWishes: '',
}
