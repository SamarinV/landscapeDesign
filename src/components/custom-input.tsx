import { TextField } from '@mui/material'
import { Controller, type Control, type FieldError } from 'react-hook-form'
import type { FormDataType } from '../validation/form-schema'

type Props = {
	name: keyof FormDataType
	label: string
	control: Control<FormDataType>
	errors?: FieldError
	required?: boolean
}

export const CustomInput = ({ name, label, control, errors, required }: Props) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					inputRef={(el) => {
						field.ref(el)
					}}
					fullWidth
					label={label}
					autoComplete="off"
					variant="standard"
					error={!!errors}
					helperText={errors?.message}
					margin="normal"
					{...(required ? { required: true } : {})}
					sx={{
						'& .MuiInputLabel-root': {
							position: 'static',
							transform: 'none',
							whiteSpace: 'normal',
							maxWidth: '100%',
							fontSize: '14px',
							lineHeight: 1.5,
						},
						'& .MuiInputBase-root': { marginTop: '4px' },
						'& input:-webkit-autofill': {
							WebkitBoxShadow: '0 0 0 1000px transparent inset',
							WebkitTextFillColor: 'black',
						},
					}}
				/>
			)}
		/>
	)
}
