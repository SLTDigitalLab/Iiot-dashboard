import { Box, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState,useContext } from "react";
import { colors } from "../styles/Colors";
import InputBase from '@mui/material/InputBase';
import { useAppState } from "../state/appState";

//css
import "../styles/navbar.css";
import { MachineContext } from './../context/machineContext';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(({theme,open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width','margin'],{
        easing: theme.transitions.easing.shart,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width','margin'],{
            easing: theme.transitions.easing.shart,
            duration: theme.transitions.duration.enteringScreen
        }),
    })
}));

const Search = styled('div')(({theme}) => ({
    position:'relative',
    borderRadius: theme.shape.searchbar.borderRadius,
    backgroundColor:alpha(colors.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(colors.white, 0.25),
    },
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display:'block',
        marginLeft:theme.spacing(1),
        width:'auto'
    }
    
}));

const SearchIconWrapper = styled('div')(({theme})=> ({
    position: 'absolute',
    height: '100%',
    padding: theme.spacing(0,2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
    
})); 

const StyledSearchInputBase = styled(InputBase)(({theme}) =>({
    color: 'inherit',
    "& .MuiInputBase-input": {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition:theme.transitions.create('width'),
        width:'100%',
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus' : {
                width: '24ch'
            }
        }
    }
}));

export default function PrimaryAppbar({switchColorMode}) {


    const {state, dispatch} = useAppState();
    const [anchorEl, setAnchorEl]=useState(null);


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [themeModeSwitch, setThemeModeSwitch]= useState(false);
 

    useEffect(() => {
        dispatch({type: 'theme-switch'});
        switchColorMode(themeModeSwitch);
    },[themeModeSwitch]); 

    return(
        <Box>
            <AppBar position= "fixed" open={state.drawer}>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        edge="start"
                        sx={{
                            marginRight: 3,
                            ...(state.drawer && {display: 'none'})
                        }}
                        onClick={() => dispatch({type:'drawer'})}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily :"'Play', sans-serif",
                            flexGrow: 1,
                            display:{
                                xs: 'none',
                                sm: 'block'
                            }
                        }}
                    >
                        CMS
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledSearchInputBase />
                    </Search>
                    <Box
                        sx= {{
                            width: {
                                xs: '100%',
                                md: '10%'
                            }
                        }}
                        display= "flex"
                        justifyContent = "space-evenly"
                        alignItems= "center"
                        
                    >
                        {matches && <SearchIcon/>}
                        <IconButton  sx={{color:'inherit'}}>
                            <NotificationsIcon />
                            {/* {
                                notifications.length>0? <div className="counter">
                                { notifications.length} 
                           </div> :null
                            } */}
                       
                        </IconButton>
                          

                        <IconButton  sx={{color:'inherit'}}>
                            <AccountCircleIcon />
                      
                        </IconButton>

                        
                        <IconButton 
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        sx= {{color:'inherit'}}>
                            <SettingsIcon />
                        </IconButton>
                        
                    </Box>
                </Toolbar>
            </AppBar>

            <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                open= {!!anchorEl}
                onClose={() => setAnchorEl(null)}>
                <MenuItem>
                        <FormGroup>
                            <FormControlLabel 
                                control={<Switch checked={themeModeSwitch}
                                onClick={() => setThemeModeSwitch(s => !s)}
                                />}
                                label={state.theme ==='light' ? "Light": "Dark"}
                            />
                        </FormGroup>
                </MenuItem>
            </Menu>

        </Box>
    );
}