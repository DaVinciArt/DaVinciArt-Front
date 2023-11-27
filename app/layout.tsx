'use client';

import React from "react";

import Header from "../components/common/layout/header/Header";
import Footer from "../components/common/layout/footer/Footer";

import './globals.css';
import {Box, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#b5838d',
    },
  },
  typography: {
    fontFamily: 'Mulish',
  },
})

const RootLayout =({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&family=Mulish:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>Da Vinci</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Header/>
          <Box sx={{minHeight: '90vh'}}>{children}</Box>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;
