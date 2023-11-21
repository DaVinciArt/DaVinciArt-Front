import {SxProps, Theme} from "@mui/material/styles";

export const container: SxProps<Theme> = {
  width: 'fit-content',
	display: 'flex',
  alignItems: 'center',

};

export const carouselControls: SxProps<Theme> = {
  width: {
    xs: '40px',
    sm: '60px'
  },
  height: 'fit-content',
  color: '#5D2A42',
  opacity: 0.5,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
};

export const collectionContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 20px',
};

export const collectionHeading: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontSize: '40px',
};

export const collectionAuthor: SxProps<Theme> = {
  fontFamily: 'Mulish',
  fontSize: '20px',
  fontWeight: 300,
  opacity: 0.6,
};


