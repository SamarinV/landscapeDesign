import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Controller, type Control, type FieldErrors } from 'react-hook-form'
import type { FormDataType } from '../validation/form-schema'

type Props = {
	name: keyof FormDataType
	label: string
	items: string[]
	control: Control<FormDataType>
	errors?: FieldErrors<FormDataType>
}

export const CustomRadio = ({ name, label, items, control, errors }: Props) => {
	return (
		<FormControl sx={{ marginTop: '15px' }}>
			<FormLabel sx={{ textAlign: 'left' }}>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<RadioGroup {...field}>
						{items.map((item, id) => (
							<FormControlLabel key={id} value={item} control={<Radio />} label={item} />
						))}
					</RadioGroup>
				)}
			/>
			{errors?.[name]?.message && <p style={{ color: 'red' }}>{errors[name].message}</p>}
		</FormControl>
	)
}
