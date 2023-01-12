import { useTheme } from "@emotion/react";
import {styled} from "@mui/material/styles"
import { Box } from "@mui/system";
import { useAppState } from "../state/appState";
import { DrawerHeader, drawerWidth } from "./sideBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


const openedMixin = (theme) => ({
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    marginLeft: `calc(${theme.spacing(2)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

const MainContainer = styled(Box)(({theme, open}) => ({
    marginLeft: drawerWidth,
    whiteSpace:'nowrap',
    ...(open && {
        ...openedMixin(theme),
        '&. MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open &&{
        ...closedMixin(theme),
        '&. MuiDrawer-paper': closedMixin(theme)
    })
}));

export default function Main(){

    const { state } = useAppState();
    const theme =useTheme();

     return (
    <MainContainer component="Main" open={state.drawer}>
      <DrawerHeader />
      <Box>

      </Box>
      <Grid2 container
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ p: 1 }}
      >
        <Grid2 xs={12} md={6}>

        </Grid2>
      </Grid2>
    </MainContainer>
  
    );
}