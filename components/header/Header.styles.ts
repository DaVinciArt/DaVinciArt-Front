import {SxProps, Theme} from "@mui/material";

export const container: SxProps<Theme> = {
	padding: '10px 30px',
	borderBottom: '1px solid #5D2A42',
	display: 'flex',
};

export const logo: SxProps<Theme> = {
	fontSize: '2.5rem',
	whiteSpace: 'nowrap',
	fontFamily: 'Cormorant Infant',
};

export const controls: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: '20px',
	width: '50%',
};
