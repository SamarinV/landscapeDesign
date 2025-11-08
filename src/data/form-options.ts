import type { FormData } from '../types/types'

type ElementType = {
	name: keyof FormData
	value: string
}

export const dataExploitationPeriods: ElementType[] = [
	{ name: 'exploitationPeriodSpring', value: 'весна' },
	{ name: 'exploitationPeriodSummer', value: 'лето' },
	{ name: 'exploitationPeriodAutumn', value: 'осень' },
	{ name: 'exploitationPeriodWinter', value: 'зима' },
]
export const dataProblemsArea: ElementType[] = [
	{ name: 'problemStagnantWater', value: 'застой воды' },
	{ name: 'problemFrivolity', value: 'ветренность' },
	{ name: 'problemMasking', value: 'объекты, требующие маскировки' },
]

export const dataServiceType: string[] = ['выезд-консультация специалиста', 'эскизный проект участка', 'дизайн проект']
export const dataResidenceTime: string[] = ['круглогодично', 'сезонно']
export const dataSoil: string[] = ['чернозем', 'суглинок', 'глинистая']
export const dataRelief: string[] = ['ровный', 'холмистый', 'с уклоном']
export const dataGroundWaterLevel: string[] = ['высокий', 'низкий']

export const dataSpecialProjects: ElementType[] = [
	{ name: 'parking', value: 'дополнительная стоянка или укрытие для машины' },
	{ name: 'garbageContainer', value: 'место для мусорного контейнера' },
	{ name: 'compostHeap', value: 'место для компостной кучи' },
	{ name: 'woodCutter', value: 'дровяник' },
	{ name: 'enclosureForPets', value: 'укрытие (вольер) для домашних животных' },
	{ name: 'greenHouse', value: 'теплица' },
]
export const dataFunctionalZoning: ElementType[] = [
	{ name: 'sportsGround', value: 'спортивная площадка' },
	{ name: 'playGround', value: 'детская площадка' },
	{ name: 'recreationArea', value: 'зона тихого отдыха (беседка/пергола/качели)' },
	{ name: 'barbecue', value: 'барбекю' },
	{ name: 'swimmingPool', value: 'бассейн' },
	{ name: 'vegetableGarden', value: 'функциональный огород' },
]
export const dataCompositionalElements: ElementType[] = [
	{ name: 'sportsGround', value: 'спортивная площадка' },
	{ name: 'playGround', value: 'детская площадка' },
	{ name: 'recreationArea', value: 'зона тихого отдыха (беседка/пергола/качели)' },
	{ name: 'barbecue', value: 'барбекю' },
	{ name: 'swimmingPool', value: 'бассейн' },
	{ name: 'vegetableGarden', value: 'функциональный огород' },
]
export const dataFlowerGarden: ElementType[] = [
	{ name: 'annualCrops', value: 'однолетние культуры' },
	{ name: 'perennialCrops', value: 'многолетние культуры' },
	{ name: 'continuousFlowering', value: 'цветники непрерывного цветения' },
	{ name: 'rosaries', value: 'розарии' },
]

export const dataMaterialsUsed: ElementType[] = [
	{ name: 'wood', value: 'дерево' },
	{ name: 'stone', value: 'камень' },
	{ name: 'metalForging', value: 'металлическая ковка' },
	{ name: 'concrete', value: 'бетон' },
	{ name: 'decorativeCrushedStone', value: 'декоративный щебень' },
]
export const dataLandscapeStyles: ElementType[] = [
	{ name: 'regularStyle', value: 'регулярный' },
	{ name: 'ecoStyle', value: 'эко стиль' },
	{ name: 'alpineStyle', value: 'альпийский' },
	{ name: 'orientalStyle', value: 'восточный' },
	{ name: 'russianStyle', value: 'русский' },
	{ name: 'highTechStyle', value: 'хай-тек' },
	{ name: 'minimalismStyle', value: 'минимализм' },
	{ name: 'japaneseGardenStyle', value: 'японский сад' },
]
export const dataSpecialWishes: ElementType[] = [
	{ name: 'barrierFree', value: 'безбарьерная среда' },
	{ name: 'lowMaintenanceGarden', value: 'малоуходный сад' },
]
export const dataAdditionally: ElementType[] = [
	{ name: 'lightingSystem', value: 'система освещения' },
	{ name: 'irrigationSystem', value: 'система полива' },
	{ name: 'drainageSystem', value: 'система дренажа' },
]

export const dataWhoTakesCareGarden: string[] = ['самостоятельно', 'садовник']

