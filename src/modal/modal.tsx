import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { CheckCircleIcon } from '../assets/check-icon'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

type ModalProps = {
	isOpen: boolean
	setIsOpen: (val: boolean) => void
}

export const CustomModal = ({ isOpen, setIsOpen }: ModalProps) => {
	const handleClose = () => setIsOpen(false)

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Ваша заявка принята!
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						В ближайшее время мы с вами свяжемся
					</Typography>
					<CheckCircleIcon style={{ width: '2.5rem', height: '2.5rem', color: 'green', marginTop: '1rem' }} />
				</Box>
			</Modal>
		</div>
	)
}
