import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import UserImage from '../components/User/userImage';
import UserData from '../components/User/userData';
import PersonalDetail from "../components/User/personalDetails";
import UserPassword from '../components/User/userPassword';
import UserAccount from '../components/User/userAccount';
import { Button } from '@mui/material';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color:"inherit",
    fontWeight:"400",
    '&.Mui-selected': {
      color: '#0008C1',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#30c1d1',
    },
  }),
);


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <>
      <Box height={60} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <StyledTab label="Profile" {...a11yProps(0)} />
            <StyledTab label="Personal Details" {...a11yProps(1)} />
            <StyledTab label="Change Password" {...a11yProps(2)} />
            <StyledTab label="Account Settings" {...a11yProps(3)} />
          </StyledTabs>
          <Divider />
        </Box>
        <TabPanel value={value} index={0}>
      
        <Grid container spacing={2}>
        
              <Grid xs={12} md= {5} textAlign='center' item>
                < UserImage/>
              </Grid>
              <Grid xs={12} md= {7} textAlign='center' item>
                <UserData/>
              </Grid>
         </Grid>
         
        </TabPanel>
        <TabPanel value={value} index={1}>
            <PersonalDetail/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <UserPassword/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <UserAccount />
        </TabPanel>
      </Box>
    </>
    
  );
}