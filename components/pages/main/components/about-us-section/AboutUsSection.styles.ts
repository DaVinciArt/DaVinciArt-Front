import {SxProps, Theme} from "@mui/material";

export const wrapper: SxProps<Theme> = {
  backgroundColor: '#FFF9EC',
  padding: '0 20px',
}

export const aboutHeader: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.6rem',
  },
  marginBottom: {
    xs: '15px',
    sm: '20px',
  },
  textAlign: {
    xs: 'center',
    sm: 'left',
  }
}

export const aboutContent: SxProps<Theme> = {
  maxWidth: '1000px',
  padding: '25px 0',
  margin: '0 auto',

}

export const aboutText: SxProps<Theme> = {
  marginBottom: '16px',
  textAlign: 'justify',
  fontSize: {
    xs: '14px',
    sm: '16px',
  },
};