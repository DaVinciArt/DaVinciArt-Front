import {TextField} from "@mui/material";

const CustomInput = (
	label: string,
	required: boolean,
) => {
	return (
		<TextField required={required} label={label} variant="outlined"/>
	);
};

export default CustomInput
