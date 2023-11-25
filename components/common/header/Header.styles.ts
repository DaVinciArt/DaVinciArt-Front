import {SxProps, Theme} from "@mui/material";

export const container: SxProps<Theme> = {
	padding: '10px 30px',
	borderBottom: '1px solid #5D2A42',
	display: 'flex',
};

export const logo: SxProps<Theme> = {
  fontSize: {
    xs: 'calc(1.7rem + 1.5vw)',
    lg: '2.5rem',
  },
	whiteSpace: 'nowrap',
	fontFamily: 'Cormorant Infant',
};

export const controls: SxProps<Theme> = {
	display: {
    xs: 'none',
    sm: 'flex',
  },
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: '20px',
	width: '50%',
};

export const mobileControls: SxProps<Theme> = {
  display: {
    xs: 'flex',
    sm: 'none',
  },
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '50%',
};
