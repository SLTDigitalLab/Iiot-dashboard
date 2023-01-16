import * as React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function UserData() {

  return (
    <>
    
    <Card style={{padding: "20px 5px 10px 5px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" textAlign={'left'}>
              About me
           </Typography> 
             <Divider/>

          <Typography variant="body2" color="textSecondary" component="p" gutterBottom textAlign={'left'} marginTop={"15px"}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography> 

          <Typography gutterBottom variant="h5" marginTop={"20px"} textAlign={'left'}>
              Details
          </Typography> 
             <Divider/>

             <TableContainer component={Paper}>
                <Table aria-label="simple table"> 
                  <TableBody>
                    <TableRow>
                      <TableCell>Name :</TableCell>
                      <TableCell>Shirley C Tyner</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email:</TableCell>
                      <TableCell>frieda6@gmail.com</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Location :</TableCell>
                      <TableCell>Texas</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Address:</TableCell>
                      <TableCell>Houston, Texas(TX), 77070</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phone No :</TableCell>
                      <TableCell>832-205-7282</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Website URL :</TableCell>
                      <TableCell>https://trickuweb.com</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
             </TableContainer>
            
          </CardContent>
        </Card>
    

    </>

  )
}

export default UserData