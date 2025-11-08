import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'
import type { FormData } from '../types/types'

type Props = {
	name: keyof FormData
	label: string
	items: string[]
	control: any
	errors?: any
	required?: boolean
}

export const CustomRadio = ({ name, label, items, control, errors, required }: Props) => {
	return (
		<FormControl {...(required ? { required: true } : {})} sx={{ marginTop: '15px' }}>
			<FormLabel sx={{ textAlign: 'left' }}>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<RadioGroup {...field}>
						{items.map((item) => (
							<FormControlLabel key={item} value={item} control={<Radio />} label={item} />
						))}
					</RadioGroup>
				)}
			/>
			{errors?.[name]?.message && <p style={{ color: 'red' }}>{errors[name].message}</p>}
		</FormControl>
	)
}
