import {SxProps, Theme} from "@mui/material";

export const tabs: SxProps<Theme> = {
  display: {
    xs: 'none',
    md: 'flex'
  },
}

export const tabPanelContainer: SxProps<Theme> = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px 20px',
}
