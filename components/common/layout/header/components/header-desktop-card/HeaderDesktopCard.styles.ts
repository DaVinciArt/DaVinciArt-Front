import {SxProps, Theme} from "@mui/material";

export const userCard: SxProps<Theme> = {
  display: {
    xs: 'none',
    sm: 'flex',
  },
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '20px',
  '&:hover .hover-underline': {
    '&:after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom right',
    }
  }
}

export const cardUsername: SxProps<Theme> = {
  textAlign: 'right',
  fontSize: '17px',
  display: 'inline-block',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '1px',
    bottom: -2,
    left: 0,
    backgroundColor: '#b5838d',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out'
  }
};

export const cardBalance: SxProps<Theme> = {
  mt: '3px',
  color: '#6e6e6e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
};

export const avatar: SxProps<Theme> = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#b5838d'
};