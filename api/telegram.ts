import type { FormData } from '../src/types/types'

const baseUrl = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/`
const chatId = import.meta.env.VITE_CHAT_ID

const buildMessage = (form: FormData) => {
	const periods: string[] = []
	if (form.exploitationPeriodSpring) periods.push('весна')
	if (form.exploitationPeriodSummer) periods.push('лето')
	if (form.exploitationPeriodAutumn) periods.push('осень')
	if (form.exploitationPeriodWinter) periods.push('зима')

	const problems: string[] = []
	if (form.problemStagnantWater) problems.push('застой воды')
	if (form.problemFrivolity) problems.push('ветренность')
	if (form.problemMasking) problems.push('объекты требующие маскировки')

	const specialProjects: string[] = []
	if (form.parking) specialProjects.push('парковка')
	if (form.compostHeap) specialProjects.push('компостная куча')
	if (form.woodCutter) specialProjects.push('дровяник')
	if (form.enclosureForPets) specialProjects.push('вольер')
	if (form.greenHouse) specialProjects.push('теплица')

	const functionalZoning: string[] = []
	if (form.sportsGround) functionalZoning.push('спортивная площадка')
	if (form.playGround) functionalZoning.push('детская площадка')
	if (form.recreationArea) functionalZoning.push('зона отдыха (беседка/пергола/качели)')
	if (form.barbecue) functionalZoning.push('барбекю')
	if (form.swimmingPool) functionalZoning.push('бассейн')
	if (form.vegetableGarden) functionalZoning.push('функциональный огород')

	const compositionalElements: string[] = []
	if (form.smallArchitecturalForms) compositionalElements.push('малые архитектурные формы')
	if (form.pond) compositionalElements.push('водоем')
	if (form.stream) compositionalElements.push('ручей')
	if (form.waterfall) compositionalElements.push('водопад')
	if (form.rockGarden) compositionalElements.push('альпинарий/рокарий')
	if (form.dryStream) compositionalElements.push('сухой ручей')

	const flowerGarden: string[] = []
	if (form.annualCrops) flowerGarden.push('однолетние культуры')
	if (form.perennialCrops) flowerGarden.push('многолетние культуры')
	if (form.continuousFlowering) flowerGarden.push('цветники непрерывного цветения')
	if (form.rosaries) flowerGarden.push('розарии')

	const materialsUsed: string[] = []
	if (form.wood) materialsUsed.push('дерево')
	if (form.stone) materialsUsed.push('камень')
	if (form.metalForging) materialsUsed.push('металлическая ковка')
	if (form.concrete) materialsUsed.push('бетон')
	if (form.decorativeCrushedStone) materialsUsed.push('декоративный щебень')

	const landscapeStyles: string[] = []
	if (form.regularStyle) landscapeStyles.push('регулярный')
	if (form.ecoStyle) landscapeStyles.push('эко стиль')
	if (form.alpineStyle) landscapeStyles.push('альпийский')
	if (form.orientalStyle) landscapeStyles.push('восточный')
	if (form.russianStyle) landscapeStyles.push('русский')
	if (form.highTechStyle) landscapeStyles.push('хай-тек')
	if (form.minimalismStyle) landscapeStyles.push('минимализм')
	if (form.japaneseGardenStyle) landscapeStyles.push('японский сад')

	const specialWishes: string[] = []
	if (form.barrierFree) landscapeStyles.push('безбарьерная среда')
	if (form.lowMaintenanceGarden) landscapeStyles.push('малоуходный сад')

	const additionally: string[] = []
	if (form.lightingSystem) additionally.push('система освещения')
	if (form.irrigationSystem) additionally.push('система полива')
	if (form.drainageSystem) additionally.push('система дренажа')

	return `
ФИО: ${form.name}
Email: ${form.email}
Телефон: ${form.phone}
Адрес: ${form.address}
Услуга: ${form.serviceType}
Состав семьи: ${form.familyComposition}
Возвраст заказчика: ${form.customerAge}
Дети (пол/возраст): ${form.children}
Аллергии: ${form.allergy}
Период проживания: ${form.residenceTime}
Домашние животные: ${form.pets}
Площадь участка: ${form.plotArea}
Существующие постройки: ${form.buildings}
Существующия растительность: ${form.plants}
Рельеф: ${form.relief}
Почва: ${form.soil}
Уровень грунтовых вод: ${form.groundWaterLevel}
Период эксплуатации сада: ${periods.join(', ')}
Что необходимо сохранить: ${form.whatToSave}
Что нужно убрать/пересадить: ${form.whatToRemoveAndReplant}
Существующие проблемы зоны участка: ${problems.join('; ')}
Необходимость специальных проектов: ${specialProjects.join('; ')}
Функциональное зонирование участка: ${functionalZoning.join('; ')}
Желаемые композиционные элементы: ${compositionalElements.join('; ')}
Плодовые культуры (вид/кол-во): ${form.fruitCrops}
Ягодные культуры (вид/кол-во): ${form.berryCrops}
Пряно-ароматные травы: ${form.herbs}
Хвойные деревья и кустарники: ${form.treesAndShrubs}
Устройство цветников: ${flowerGarden.join('; ')}
Растения, которые особо привлекают: ${form.favoritePlants}
Растения, которые не хотели бы видеть: ${form.unlovedPlants}
Предпочтения по материалам: ${materialsUsed.join('; ')}
Какие цвета привлекают: ${form.favoriteColors}
Какие цвета отталкивают: ${form.unlovedColors}
Предпочтения по стилям: ${landscapeStyles.join('; ')}
Какие цвета отталкивают: ${form.unlovedColors}
Особые пожелания: ${specialWishes.join('; ')}
Дополнительно: ${additionally.join('; ')}
Другие пожелания: ${form.otherWishes}
`
}

export const sendMessage = async (form: FormData): Promise<void> => {
	const message = buildMessage(form)
	const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
	const response = await fetch(url)

	if (!response.ok) {
		const error = await response.json()
		await Promise.reject(error.description || 'Что-то пошло не')
	}
}
