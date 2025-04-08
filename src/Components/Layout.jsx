import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarr from './modules Components/Appbar';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
     <Box>
        <AppBarr />
     </Box>
  )
}


