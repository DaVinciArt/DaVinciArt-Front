import {SxProps, Theme} from "@mui/material/styles";

export const mainPageStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
};

export const carouselSection: SxProps<Theme> = {
  width: {
    xs: '100%',
    sm: '80%',
  },
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px'
};

export const contactsButton: SxProps<Theme> = {
  width: '100%',
  margin: '15px 0',
};

export const artistsSection: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffe5d9',
  padding: '25px 20px',
};

export const artistsSectionHeader: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: {
    xs: 'calc(1.5rem + 1.5vw)',
    lg: '2.5rem',
  },
  paddingBottom: '25px',
  color: '#3d3d3d',
  textAlign: 'center',
};

export const artistsCards: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
};
