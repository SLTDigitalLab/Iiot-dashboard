import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';

import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MachineContext } from './../context/machineContext';







function Customize() {
  const [totalSections, setTotalSections] = useState([]);
  const {machines,section,setSection} = useContext(MachineContext);



const sectionEndPoint = "http://localhost:4000/api/customize/sections"; 

useEffect(() => {
  async function getMachineSensors() {
    const res = await axios.get(sectionEndPoint);
    setTotalSections(res.data);
  }

  getMachineSensors();
}, []);

  
  


  

    console.log(section);
    return (
     
      <>
        <Box height={60} />
        {totalSections.map((s) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{`${s}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {s}
              <Typography>
               
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    );
}

export default Customize