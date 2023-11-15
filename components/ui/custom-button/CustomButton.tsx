import {Button, SxProps, Theme} from "@mui/material";
import React, {FC} from "react";
import * as styles from './CustomButton.styles'
import mergeSx from "../../../lib/utils/MergeSxStylesUtil";
import {ButtonColor, ButtonVariant} from "./types";
import {color} from "@mui/system";

interface ButtonProps {
	color?: ButtonColor;
	variant?: ButtonVariant;
	sx?: SxProps<Theme>;
}

const CustomButton: FC<ButtonProps> = (
	{
		children,
		color= ButtonColor.PRIMARY,
		variant= ButtonVariant.OUTLINED,
		sx= {},
	}) => {
	return (
		<Button sx={mergeSx(styles.button(color, variant), sx)}>{children}</Button>
	);
};

export default CustomButton;
