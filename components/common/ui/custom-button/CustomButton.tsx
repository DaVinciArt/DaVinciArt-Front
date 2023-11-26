import {Box, Button, SxProps, Theme, Typography} from "@mui/material";
import {FC, MouseEventHandler, ReactNode} from "react";
import * as styles from './CustomButton.styles'
import mergeSx from "../../../../lib/utils/MergeSxStylesUtil";
import {ButtonColor, ButtonSize, ButtonVariant} from "./types";
import {color} from "@mui/system";

interface ButtonProps {
  text: string,
	color?: ButtonColor;
	variant?: ButtonVariant;
  size?: ButtonSize;
	icon?: ReactNode | string;
	sx?: SxProps<Theme>;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	href?: string;
	type?: 'button' | 'reset' | 'submit';
}

const CustomButton: FC<ButtonProps> = (
	{
		text,
		color= ButtonColor.PRIMARY,
		variant= ButtonVariant.OUTLINED,
    size = ButtonSize.MEDIUM,
    icon,
		sx= {},
		...rest
	}) => {
	return (
		<Button sx={mergeSx(styles.button(color, variant, size), sx)} {...rest}>
      {icon && <Box sx={{width: '30px'}}>{icon}</Box>}
      <Typography sx={styles.text(size)}>{text}</Typography>
    </Button>
	);
};

export default CustomButton;
