import { matchIsValidTel } from 'mui-tel-input'
import { z } from 'zod'

export const formSchema = z.object({
	name: z.string().min(3, 'Введите ФИО'),
	email: z.string().optional(),
	phone: z
		.string()
		.min(1, 'Введите телефон')
		.refine((v) => matchIsValidTel(v ?? ''), {
			message: 'Некорректный телефон',
		}),
	serviceType: z.string().optional(),
	address: z.string().optional(),
	familyComposition: z.string().optional(),
	customerAge: z.string().optional(),
	children: z.string().optional(),
	allergy: z.string().optional(),
	residenceTime: z.string().optional(),
	pets: z.string().optional(),
	plotArea: z.string().optional(),
	buildings: z.string().optional(),
	plants: z.string().optional(),
	relief: z.string().optional(),
	soil: z.string().optional(),
	groundWaterLevel: z.string().optional(),
	exploitationPeriods: z.array(z.string()).optional(),
	whatToSave: z.string().optional(),
	whatToRemoveAndReplant: z.string().optional(),
	problemsArea: z.array(z.string()).optional(),
	specialProjects: z.array(z.string()).optional(),
	functionalZoning: z.array(z.string()).optional(),
	compositionalElements: z.array(z.string()).optional(),
	fruitCrops: z.string().optional(),
	berryCrops: z.string().optional(),
	herbs: z.string().optional(),
	treesAndShrubs: z.string().optional(),
	flowerGarden: z.array(z.string()).optional(),
	favoritePlants: z.string().optional(),
	unlovedPlants: z.string().optional(),
	materialsUsed: z.array(z.string()),
	favoriteColors: z.string().optional(),
	unlovedColors: z.string().optional(),
	landscapeStyles: z.array(z.string()).optional(),
	whoTakesCareGarden: z.string().optional(),
	specialWishes: z.array(z.string()).optional(),
	additionally: z.array(z.string()).optional(),
	otherWishes: z.string().optional(),
})

export type FormDataType = z.infer<typeof formSchema>
