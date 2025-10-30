import { Box, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: '100%',
				height: '60px',
				backgroundColor: '#97d095',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				mt: 6,
			}}
		>
			<Typography variant="body2" color="text.secondary">
				© 2025 Ландшафтный дизайн
			</Typography>
		</Box>
	)
}

export default Footer
