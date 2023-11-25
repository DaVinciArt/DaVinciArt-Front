import {SxProps, Theme} from "@mui/material";

export const container = (isLoginOrRegister): SxProps<Theme> => ({
	padding: '10px 30px',
	borderBottom: '1px solid #5D2A42',
	display: 'flex',
  justifyContent: isLoginOrRegister ? 'center' : 'space-between',
});

export const logo: SxProps<Theme> = {
  fontSize: {
    xs: 'calc(1.7rem + 1.5vw)',
    lg: '2.8rem',
  },
	whiteSpace: 'nowrap',
  width: 'fit-content',
	fontFamily: 'Cormorant Infant',
};

export const controls = (isLoginOrRegister): SxProps<Theme> => ({
	display: {
    xs: 'none',
    sm: isLoginOrRegister ? 'none' : 'flex',
  },
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: '20px',
});

export const mobileControls = (isLoginOrRegister): SxProps<Theme> => ({
  display: {
    xs: isLoginOrRegister ? 'none' : 'flex',
    sm: 'none',
  },
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '50%',
});
