export type FormData = {
	name: string
	email: string
	phone: string
	serviceType: string
	address?: string | null
	familyComposition?: string | null
	customerAge?: string | null
	children?: string | null
	allergy?: string | null
	residenceTime?: string | null
	pets?: string | null
	plotArea?: string | null
	buildings?: string | null
	plants?: string | null
	relief?: string | null
	soil?: string | null
	groundWaterLevel?: string | null

	//period exploitation
	exploitationPeriodSummer?: boolean | null
	exploitationPeriodSpring?: boolean | null
	exploitationPeriodAutumn?: boolean | null
	exploitationPeriodWinter?: boolean | null

	whatToSave?: string | null
	whatToRemoveAndReplant?: string | null

	//problems area
	problemStagnantWater?: boolean | null
	problemFrivolity?: boolean | null
	problemMasking?: boolean | null

	//special projects
	parking?: boolean | null
	garbageContainer?: boolean | null
	compostHeap?: boolean | null
	woodCutter?: boolean | null
	enclosureForPets?: boolean | null
	greenHouse?: boolean | null

	//functional zoning of the site
	sportsGround?: boolean | null
	playGround?: boolean | null
	recreationArea?: boolean | null
	barbecue?: boolean | null
	swimmingPool?: boolean | null
	vegetableGarden?: boolean | null

	//desired compositional elements
	smallArchitecturalForms?: boolean | null
	pond?: boolean | null
	stream?: boolean | null
	waterfall?: boolean | null
	rockGarden?: boolean | null
	dryStream?: boolean | null

	fruitCrops?: string | null
	berryCrops?: string | null
	herbs?: string | null
	treesAndShrubs?: string | null

	//flower garden
	annualCrops?: string | null
	perennialCrops?: string | null
	continuousFlowering?: string | null
	rosaries?: string | null

	favoritePlants?: string | null
	unlovedPlants?: string | null

	//materials used
	wood?: boolean | null
	stone?: boolean | null
	metalForging?: boolean | null
	concrete?: boolean | null
	decorativeCrushedStone?: boolean | null

	favoriteColors?: string | null
	unlovedColors?: string | null

	//landscape style
	regularStyle?: boolean | null
	ecoStyle?: boolean | null
	alpineStyle?: boolean | null
	orientalStyle?: boolean | null
	russianStyle?: boolean | null
	highTechStyle?: boolean | null
	minimalismStyle?: boolean | null
	japaneseGardenStyle?: boolean | null

	whoTakesCareGarden?: string | null

	//special wishes
	barrierFree?: boolean | null
	lowMaintenanceGarden?: boolean | null
	
	//additionally
	lightingSystem?: boolean | null
	irrigationSystem?: boolean | null
	drainageSystem?: boolean | null
	
	otherWishes?: string | null
}


