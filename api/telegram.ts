import type { FormData } from '../src/types/types'

const baseUrl = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/`
const chatId = import.meta.env.VITE_CHAT_ID

const buildMessage = (form: FormData) => {
	return `
Имя: ${form.firstName} ${form.middleName} ${form.lastName}
Email: ${form.email}
Страна: ${form.country}
Телефон: ${form.phone}
Адрес: ${form.address}
Услуга: ${form.serviceType}
Семья: ${form.family}
Дети: ${form.children}
Аллергии: ${form.allergies}
Время проживания: ${form.livingTime}
Пик сезона: ${form.peakSeason}
Проблемные зоны 1: ${form.problemArea1}
Проблемные зоны 2: ${form.problemArea2}
Проблемные зоны 3: ${form.problemArea3}
`
}

export const sendMessage = async (form: FormData): Promise<void> => {
	const message = buildMessage(form)
	const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
	const response = await fetch(url)

	if(!response.ok){
		const error = await response.json()
		await Promise.reject(error.description || "Что-то пошло не")
	}
}
