import {SxProps, Theme} from "@mui/material";
import {ButtonColor, ButtonSize, ButtonVariant} from "./types";

export const button = (
	color: ButtonColor,
	variant: ButtonVariant,
  size: ButtonSize,
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

  ...(size === ButtonSize.MEDIUM && {
    padding: '6px 20px',
  }),

  ...(size === ButtonSize.SMALL && {
    padding: '4px 12px',
  }),

});

export const text = (size: ButtonSize): SxProps<Theme> => ({
	textTransform: 'none',
	fontWeight: '300',

  ...(size === ButtonSize.MEDIUM && {
    fontSize: '20px',
    lineHeight: '30px',
  }),

  ...(size === ButtonSize.SMALL && {
    fontSize: '16px',
    lineHeight: '22px',
  }),
});
