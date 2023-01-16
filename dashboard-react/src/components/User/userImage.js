import { Card} from '@mui/material'
import React, { useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import pro from "./profile.png"
import slt from "./slt.png";
import intel from "./intel.png";
import Avatar from 'react-avatar-edit'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

 

const UserImage = () => {

  const [image, setimage] = useState("");
  const [imagecrop, setimagecrop] = useState(false);
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view) => {
    setpview(view);
  };

  const saveCropImage = () => {
    setprofile([...profile, {pview}]);
    setimagecrop(false);
  };


  return (
    <>
     
    <Card sx={{paddingTop:5, boxShadow:3}}>
      <h1>User Profile</h1>
      
        <div className='profile_img text-center p-4'>
        <div className='flex flex-column jutify-content-center align-items-center'>
        <img 
          style={{
            width:"200px",
            height:"200px",
            borderRadius: "50%",
            objectFit:"cover",
            border:"4px solid green"
        }}
        onClick ={() => setimagecrop(true)}
        src={profileFinal.length ? profileFinal : pro} alt="" /><br/><br/>

        <label htmlFor='' className='mt-3 font-semibold text-5xl'>Profile Name</label> <br/><br/>

          <Grid container>
            
            <Grid xs={12} md= {6} textAlign='center'>
              <img 
              src={intel} 
              style={{width:140}}
              />
            </Grid>
            <Grid xs={12} md= {6} textAlign='center'>
              <img 
                src={slt} 
                style={{width:130}}
              />
            </Grid>          
        </Grid>

        <Dialog
          visible={imagecrop}
            header={()=>(
              <p htmlFor="" className='text-2xl font-semibold textColor'>
                Update Image
              </p>
            )}
            onHide={() => setimagecrop(false)}
        >
          <div className='"confirmation-content flex flex-column align-items-center'>
              <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
              />

              <div className='flex flex-column align-items-center mt-5 w-12'>
                <div className='flex justify-content-around w-12 mt-4'>
                  <Button
                    onClick={saveCropImage}
                    label="Save"
                    icon = "pi pi-check"
                  />
                </div>
              </div>
          </div>
        </Dialog>

            <InputText 
            type="file"
            accept='image/*'
            style={{display:"none"}}

            onChange={(event)=>{
              const file = event.target.files[0];
              if(file && file.type.substring(0,5) === "image"){
                setimage(file);
              }else{
                setimage(null);
              }
            }}          
            />            
        </div>
        </div>
      

    </Card>
    
    </>
    

  )
}

export default UserImage