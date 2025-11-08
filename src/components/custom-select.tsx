import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import type { FormData } from '../types/types'

type Item = {
	name: keyof FormData
	value: string
}
type Props = {
	label: string
	items: Item[]
	control: any
}

export const CustomSelect = ({ label, items, control }: Props) => {
	return (
		<FormControl component="fieldset" margin="normal">
			<FormLabel sx={{ textAlign: 'left' }} component="legend">
				{label}
			</FormLabel>
			<FormGroup>
				{items.map((el)=> {
					return (
						<Controller
							name={el.name}
							control={control}
							render={({ field }) => (
								<FormControlLabel
									control={<Checkbox checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)} />}
									label={el.value}
								/>
							)}
						/>
					)
				})}

			</FormGroup>
		</FormControl>
	)
}