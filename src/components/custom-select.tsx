import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Controller } from 'react-hook-form'
import type { FormDataType } from '../validation/form-schema'

type Props = {
	name: keyof FormDataType
	label: string
	items: string[]
	control: any
}

export const CustomSelect = ({ name, label, items, control }: Props) => {
	return (
		<FormControl component="fieldset" margin="normal">
			<FormLabel sx={{ textAlign: 'left' }} component="legend">
				{label}
			</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const handleChange = (value: string) => {
						const exists = field.value?.some((item: string) => item === value)
						if (exists) {
							field.onChange(field.value.filter((item: string) => item !== value))
						} else {
							field.onChange([...(field.value || []), value])
						}
					}

					return (
						<FormGroup>
							{items.map((el, id) => (
								<FormControlLabel
									key={id}
									control={
										<Checkbox
											checked={!!field.value?.some((item: string) => item === el)}
											onChange={() => handleChange(el)}
										/>
									}
									label={el}
									sx={{
										'& .MuiFormControlLabel-label': {
											textAlign: 'left',
										},
									}}
								/>
							))}
						</FormGroup>
					)
				}}
			/>
		</FormControl>
	)
}
