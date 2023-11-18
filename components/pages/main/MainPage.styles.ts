import {SxProps, Theme} from "@mui/material";

export const wrapper: SxProps<Theme> = {
  backgroundColor: '#FFF9EC',
  padding: '0 20px',
}

export const content: SxProps<Theme> = {
  maxWidth: '1000px',
  padding: '25px 0',
  margin: '0 auto',

}

export const header: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: '2.5rem',
  marginBottom: '20px',
}

export const text: SxProps<Theme> = {
  fontFamily: 'Mulish',
  marginBottom: '16px',
  textAlign: 'justify',
};