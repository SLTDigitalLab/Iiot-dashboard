import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {AiFillHome} from "react-icons/ai"
import TuneIcon from '@mui/icons-material/Tune';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppState } from '../state/appState';
import Home from "../pages/Home";
import ThresholdsPage from "../pages/ThresholdsPage";
import Analysis from "../pages/Analysis";
import Customize from "../pages/Customize";
import Maintenance from "../pages/Maintenance";
import Setting from "../pages/Setting";

// import { AppBar, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CssBaseline from '@mui/material/CssBaseline';



export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} - 100px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AppDrawer() {
  const theme = useTheme();
  const {state,dispatch} = useAppState();
  const [menudata, setMenudata] =useState("Home");
  // const [open, setOpen] = useState(false);


  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={state.drawer}>
        <DrawerHeader>
          <IconButton onClick={() => dispatch({type:'drawer'})}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Home")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <AiFillHome />
                </ListItemIcon>
                <ListItemText primary={"Home"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Thresholds")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <TuneIcon />
                </ListItemIcon>
                <ListItemText primary={"Thresholds"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Analysis")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary={"Analysis"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Customize")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <SwapHorizontalCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Customize"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Maintenance")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary={"Maintenance"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Setting")}>
              <ListItemButton
                sx={{ justifyContent: state.drawer ? 'initial' : 'center'}}
              >
                <ListItemIcon
                  sx={{
                    mr: state.drawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Settings"} sx={{ opacity: state.drawer ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            

        </List>
      </Drawer>
      <Box component ="main" sx={{flexGrow: 1, p:3}}>
          {menudata == "Home" && <Home/>}
          {menudata == "Thresholds" && <ThresholdsPage/>}
          {menudata == "Analysis" && <Analysis/>}
          {menudata == "Customize" && <Customize/>}
          {menudata == "Maintenance" && <Maintenance/>}
          {menudata == "Setting" && <Setting />}
      </Box>
    </Box>
    </>
    
  );
}