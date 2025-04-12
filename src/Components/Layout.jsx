import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarr from './modules Components/Appbar';
import { Box } from '@mui/material';
import { Home } from './Home';

export const Layout = () => {
  return (
     <Box>
        <Home />
     </Box>
  )
}


