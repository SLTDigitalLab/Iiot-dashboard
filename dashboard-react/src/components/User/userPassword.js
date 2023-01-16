import React from 'react'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Divider from '@mui/material/Divider';


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Password() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <>
    <Card style={{padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Change Password
          </Typography> 
          <Divider/>
            <form style={{marginTop:"10px"}}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                      <FormControl sx={{ m: 1}} variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-currentPassword">Current Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-currentpassword"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Current Password"
                      />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} sx={{padding:"0"}}>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1}} variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-newPassword">New Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-newpassword"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Current Password"
                      />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1}} variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-confirmPassword">Confirm Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-confirmpassword"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Current Password"
                      />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                <div style={{textAlign:"center"}}>
                  <Button type="submit" variant="contained"  style={{marginTop:"20px",width:"20%"}}>Save</Button>
                </div>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
    </>
  )
}

export default Password