import type { FormDataType } from '../src/validation/form-schema'

const baseUrl = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/`
const chatId = import.meta.env.VITE_CHAT_ID

const buildMessage = (form: FormDataType) => {
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
Период эксплуатации сада: ${form.exploitationPeriods?.join(', ')}
Что необходимо сохранить: ${form.whatToSave}
Что нужно убрать/пересадить: ${form.whatToRemoveAndReplant}
Существующие проблемы зоны участка: ${form.problemsArea?.join('; ')}
Необходимость специальных проектов: ${form.specialProjects?.join('; ')}
Функциональное зонирование участка: ${form.functionalZoning?.join('; ')}
Желаемые композиционные элементы: ${form.compositionalElements?.join('; ')}
Плодовые культуры (вид/кол-во): ${form.fruitCrops}
Ягодные культуры (вид/кол-во): ${form.berryCrops}
Пряно-ароматные травы: ${form.herbs}
Хвойные деревья и кустарники: ${form.treesAndShrubs}
Устройство цветников: ${form.flowerGarden?.join('; ')}
Растения, которые особо привлекают: ${form.favoritePlants}
Растения, которые не хотели бы видеть: ${form.unlovedPlants}
Предпочтения по материалам: ${form.materialsUsed?.join('; ')}
Какие цвета привлекают: ${form.favoriteColors}
Какие цвета отталкивают: ${form.unlovedColors}
Предпочтения по стилям: ${form.landscapeStyles?.join('; ')}
Кто ухаживает за садом: ${form.whoTakesCareGarden}
Особые пожелания: ${form.specialWishes?.join('; ')}
Дополнительно: ${form.additionally?.join('; ')}
Другие пожелания: ${form.otherWishes}
`
}

export type SendMessageError = {
	type: 'api' | 'network' | 'unknown'
	message: string
}

export const sendMessage = async (form: FormDataType): Promise<void> => {
	const message = buildMessage(form)
	const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`

	try {
		const response = await fetch(url)

		if (!response.ok) {
			let errorMsg = 'Что-то пошло не так'
			try {
				const errorData = await response.json()
				errorMsg = errorData.description || errorMsg
			} catch {}
			throw { type: 'api', message: errorMsg } as SendMessageError
		}
	} catch (err: unknown) {
		if (err instanceof TypeError) {
			throw { type: 'network', message: err.message } as SendMessageError
		} else if ((err as SendMessageError).message) {
			throw err
		} else {
			throw { type: 'unknown', message: 'Произошла неизвестная ошибка' } as SendMessageError
		}
	}
}

