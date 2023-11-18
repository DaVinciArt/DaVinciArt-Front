import {Box, Button, SxProps, Theme} from "@mui/material";
import {FC, ReactNode} from "react";
import * as styles from './CustomButton.styles'
import mergeSx from "../../../lib/utils/MergeSxStylesUtil";
import {ButtonColor, ButtonVariant} from "./types";
import {color} from "@mui/system";

interface ButtonProps {
  children: ReactNode,
	color?: ButtonColor;
	variant?: ButtonVariant;
	sx?: SxProps<Theme>;
  icon?: ReactNode | string;
}

const CustomButton: FC<ButtonProps> = (
	{
		children,
		color= ButtonColor.PRIMARY,
		variant= ButtonVariant.OUTLINED,
    icon,
		sx= {},
	}) => {
	return (
		<Button sx={mergeSx(styles.button(color, variant), sx)}>
      {icon && <Box sx={{width: '30px'}}>{icon}</Box>}
      {children}
    </Button>
	);
};

export default CustomButton;
