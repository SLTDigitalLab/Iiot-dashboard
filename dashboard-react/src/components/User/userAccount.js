import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Divider from '@mui/material/Divider';

function UserAccount() {

    const currencies = [
        {
          value: 'User',
          label: 'User',
        },
        // {
        //   value: 'EUR',
        //   label: '€',
        // },
        // {
        //   value: 'BTC',
        //   label: '฿',
        // },
        // {
        //   value: 'JPY',
        //   label: '¥',
        // },
      ];

  return (
    <>
    <Card style={{padding: "20px 5px 0px 5px"}}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              General Setting
          </Typography> 
             <Divider/>
            <form style={{marginTop:"18px"}}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <TextField  label="User Name" variant="outlined" defaultValue="ShirleyTyner" fullWidth />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField  label="Account Email" variant="outlined" defaultValue="frieda6@gmail.com" fullWidth />
                </Grid>           
                <Grid item xs={6}>
                    <TextField

                            id="outlined-select-currency"
                            select
                            label="User Type"
                            defaultValue="User"
                            fullWidth
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                <TextField  label="Location" variant="outlined" defaultValue="Texas" fullWidth />
                </Grid>
                

              </Grid>
            </form>
          </CardContent>
        </Card>
        <br/>
        
        <Card style={{padding: "20px 5px 0px 5px"}}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Advance Setting
          </Typography> 
             <Divider/>
           
           
          </CardContent>
        </Card>
        <div style={{textAlign:"center"}}>
                  <Button type="submit" variant="contained"  style={{marginTop:"20px",width:"20%"}}>Save</Button>
                </div>
    </>
  )
}

export default UserAccount