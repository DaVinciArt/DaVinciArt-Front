import {SxProps, Theme} from "@mui/material";

export const drawerButton: SxProps<Theme> = {
  padding: '4px',
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: "#e6e6e6",
  },
  height: '38px',
};

export const drawerLogo: SxProps<Theme> = {
  fontSize: '2.3rem',
  whiteSpace: 'nowrap',
  fontFamily: 'Cormorant Infant',
};
export const drawerControls: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0 10px',
};

export const controlsDivider: SxProps<Theme> = {
  margin: '0 20px',
  borderRightWidth: '1px',
  borderColor: '#5D2A42',
};

export const controlsButton: SxProps<Theme> = {
  borderRadius: '25px',
  border: 'none',
  width: '120px',
};