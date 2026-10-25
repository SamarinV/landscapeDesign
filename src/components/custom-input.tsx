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
