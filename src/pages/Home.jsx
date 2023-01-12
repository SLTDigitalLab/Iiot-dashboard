
//application components
import "../styles/Home.css";
import Machines from "./../appComponents/machines/machines";
import Chart from '../appComponents/chart/chart';


import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Notifications from './../appComponents/notifications/notification';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <Box height={60} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Item>
              <Machines />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <Item><Chart/></Item>
              <Item><Notifications/></Item>
    
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home