import {alpha, SxProps, Theme} from "@mui/material";

export const formContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '40px 20px 80px'
};

export const formHeader: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: 300,
  mt: '15px',
  fontSize: {
    xs: 'calc(1.325rem + 0.9vw)',
    lg: '2rem',
  },
};

export const avatarContainer: SxProps<Theme> = {
  margin: '0 auto',
  padding: '15px',

  borderRadius: '15px',
};

export const avatar: SxProps<Theme> = {
  height: '120px',
  width: '120px',
  margin: '0 auto',
};
export const avatarControls: SxProps<Theme> = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  paddingTop: '12px',
};
