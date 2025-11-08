import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import type { FormData } from "../types/types";

type Props = {
	name: keyof FormData,
	label: string,
	control: any,
	errors?: any,
	required?: boolean
}

export const CustomInput = ({name, label, control, errors, required}: Props) => {

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					fullWidth
					label={label}
					variant="standard"
					error={!!errors}
					helperText={errors?.message}
					margin="normal"
					{...(required ? { required: true } : {})}
				/>
			)}
		/>
	)
}