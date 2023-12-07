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

export const userControls = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '5px'
}

export const userCardMobile = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '20px',
  mb: '15px'
}

export const cardUsername: SxProps<Theme> = {
  textAlign: 'right',
  fontSize: '20px',
  borderBottom: '1px solid #b5838d',
  pb: '2px',
};

export const cardBalance: SxProps<Theme> = {
  mt: '2px',
  color: '#6e6e6e',
  display: 'flex',
  alignItems: 'center',
};

export const avatar: SxProps<Theme> = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
};