import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Blog } from './Blog';
import { Home } from './Home';
import { WorkPage } from './WorkPage';
import {WorkPageDetaile} from './WorkPageDetaile'

export const Layout = () => {
  return (
     <Box>
        <WorkPageDetaile />
     </Box>
  )
}


