import {SxProps, Theme} from "@mui/material";
import {ButtonColor, ButtonVariant} from "./types";

export const button = (
	color: ButtonColor,
	variant: ButtonVariant
): SxProps<Theme> => ({
	borderRadius: '5px',
	padding: '6px 20px',
	height: 'fit-content',
	...(variant === ButtonVariant.OUTLINED && {
		color: color,
		border: `1px solid ${color}`,
		'&:hover': {
			color: 'white',
			backgroundColor: color,
		},
	}),

	...(variant === ButtonVariant.CONTAINED && {
		color: 'white',
		backgroundColor: color,
		border: `1px solid ${color}`,
		'&:hover': {
			color: 'white',
			backgroundColor: color,
		},
	}),
});

export const text: SxProps<Theme> = {
	textTransform: 'none',
	fontSize: '20px',
	fontWeight: '300',
	lineHeight: '30px',
	fontFamily: 'Mulish',
}
