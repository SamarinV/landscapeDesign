import { Box, Grid, Typography } from '@mui/material'
import automaticWatering from '../assets/services-section/automaticWatering.webp'
import improvement from '../assets/services-section/improvement.webp'
import landscapeDesign from '../assets/services-section/landscapeDesign.webp'
import landscaping from '../assets/services-section/landscaping.webp'
import lawnLaying from '../assets/services-section/lawnLaying.webp'
import planting from '../assets/services-section/planting.webp'
import s from './servicesSection.module.scss'

const services = [
	{ id: 1, title: 'Озеленение', image: landscaping },
	{ id: 2, title: 'Посадка растений', image: planting },
	{ id: 3, title: 'Автополив', image: automaticWatering },
	{ id: 4, title: 'Благоустройство территории', image: improvement },
	{ id: 5, title: 'Укладка газона', image: lawnLaying },
	{ id: 6, title: 'Ландшафтное проектирование', image: landscapeDesign },
]

const ServicesSection = () => {
	return (
		<Box component="section" mt={4} className={s.services}>
			<Grid container spacing={3}>
				{services.map(({ id, title, image }) => (
					<Grid key={id} size={{ xs: 6, sm: 6, md: 4 }}>
						<Box
							className={s.serviceItem}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								gap: 1.5,
								height: '100%',
							}}
						>
							<img src={image} alt={title} className={s.image} />
							<Typography variant="subtitle1" fontWeight={600} sx={{ mt: 1 }}>
								{title}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ServicesSection
