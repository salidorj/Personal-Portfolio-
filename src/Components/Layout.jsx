import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Blog } from './Blog';
import { Home } from './Home';


export const Layout = () => {
  return (
     <Box>
        <Blog />
     </Box>
  )
}


