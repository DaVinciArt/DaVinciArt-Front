import {SxProps, Theme} from "@mui/material";

export const reviewsConatiner: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
}

export const noReviews: SxProps<Theme> = {
  fontFamily: 'Cormorant Infant',
  fontWeight: 400,
  fontSize: {
    xs: 'calc(1.325rem + 0.9vw)',
    lg: '2rem',
  },
  color: '#6e6e6e',
  textAlign: 'center',
  mb: '10px'
}
