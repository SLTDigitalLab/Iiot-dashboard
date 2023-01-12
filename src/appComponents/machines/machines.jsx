import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

//mui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Unstable_Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//application files
import Machine from "../machine/machine";
import "./machines.css";
import { MachineContext } from './../../context/machineContext';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





//style select box
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    color: "teal",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 12,
    padding: "10px 26px 10px 12px",

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const selectEndpoint = (sid) => {
  return "http://localhost:4000/api/machines/S_000" + sid + "/machines";
};

const Machines = (props) => {
  const { section, setSection, machines, setMachines} =useContext(MachineContext);
  const {notifications,setNotifications}= useContext(MachineContext);
  const [machineCount, setMachineCount] = useState(6);
  const [machineNotifications,setMachineNotifications]= useState([]);


  const handleSectionChange = (event) => {
    if (event.target.value !== section) {
      setMachines([]);
    }
    setSection(event.target.value);
  };

  useEffect(() => {
    async function getMachines() {
      if (section >= 1) {
        const res = await axios.get(selectEndpoint(section));
        setMachines(res.data);
      }
    }

    getMachines();
  }, [section]);

  const handleMachineCount = (event) => {
    setMachineCount(event.target.value);
  };


  

  return (
    <div>
      <div className="machines-header">
        <div className="machines-header-text">
          <span className="txt1">Sensor data</span>
        </div>
        <div className="machines-header-section">
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              sx={{ m: 1, minWidth: 100, border: "1px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Section</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={section}
                label="Section"
                onChange={handleSectionChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={1}>Section 1</MenuItem>
                <MenuItem value={2}>Section 2</MenuItem>
                <MenuItem value={3}>Section 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 130 }}>
            <FormControl
              sx={{ m: 1, minWidth: 110, border: "1px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">View</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={machineCount}
                label="Machines"
                onChange={handleMachineCount}
                input={<BootstrapInput />}
              >
                <MenuItem value={6}>6 Machines</MenuItem>
                <MenuItem value={8}>8 Machines</MenuItem>
                <MenuItem value={10}>10 Machines</MenuItem>
                <MenuItem value={12}>12 Machines</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {machines.map((machine) => (
          <Grid
            xs={4}
            md={4}
            key={machine.topic_id}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Item>
              <Machine
                key={machine.topic_id}
                id={machine.topic_id}
                location={machine.location}
                section={section}
                minValues= {machine.min_values}
                maxValues= {machine.max_values}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Machines;
