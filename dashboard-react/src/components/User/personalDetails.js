import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Divider from '@mui/material/Divider';



function PersonalDetails() {

 
  return (
    <>
    
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
        <Card style={{padding: "20px 5px 10px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Personal Information
          </Typography> 
             <Divider/>
            <form style={{marginTop:"10px"}}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter your Name" label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter your location" label="Location" variant="outlined" fullWidth />
                </Grid>           
                <Grid item xs={12}>
                  <TextField label="Bio" multiline rows={7} placeholder="Type your description here" variant="outlined" fullWidth />
                </Grid>
                

              </Grid>
            </form>
          </CardContent>
        </Card>
        </Grid>

        <Grid xs={12} sm={6} item>
        <Card style={{padding: "20px 5px  0px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
               Contact Information
          </Typography> 
          <Divider/>
            <form style={{marginTop:"10px"}}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <TextField type={'number'} placeholder="Enter phone number" label="Phone Number" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField type="email" placeholder="Enter your email" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField  placeholder="Enter website URL" label="Website URL" variant="outlined" fullWidth />
                </Grid>      
                <Grid item xs={12}>
                  <TextField label="Address" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth />
                </Grid>
                

              </Grid>
            </form>
          </CardContent>
        </Card>
        </Grid>

      </Grid>
      <div style={{textAlign:"center"}}>
        <Button type="submit" variant="contained"  style={{marginTop:"20px",width:"50%"}}>Save</Button>
      </div>
        


    </>
  )
}

export default PersonalDetails