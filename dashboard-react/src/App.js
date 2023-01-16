
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './components/navBar';
import appTheme, { palette } from './styles/Theme';
import AppState from './state/appState';
import { useMemo, useState } from 'react';
import SideBar from './components/sideBar';
import Main from './components/main';

//react router dom
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";


export default function App() {

  const [mode,setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode(prevMode => prevMode === 'light' ? 'dark':'light')
      }
    }),[]
    );
  

  const theme = createTheme({
    palette: {...palette, mode: mode},
    ...appTheme
  })

  return (
    <ThemeProvider theme={theme}>
      <AppState>
         <Box sx={{ display:"flex", flexDirection:"column"}}>
           <CssBaseline />
           <NavBar switchColorMode={colorMode.toggleMode} />
           <SideBar />
           <Main />
         </Box>
      </AppState>
    </ThemeProvider>
    
  );
}


