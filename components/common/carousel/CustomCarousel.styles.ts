import {SxProps, Theme} from "@mui/material/styles";

export const container: SxProps<Theme> = {
  width: '100%',
	display: 'flex',
  alignItems: 'center',
};

export const carouselControls: SxProps<Theme> = {
  width: '60px',
  display: {
    xs: 'none',
    sm: 'block'
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
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
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


