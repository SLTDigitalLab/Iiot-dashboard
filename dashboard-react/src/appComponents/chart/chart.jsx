import React, { useState, useContext,useEffect } from "react";
import AreaChart from "./AreaChart";


//mui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "axios";

//application files
import "./Chart.css";
import { MachineContext } from "../../context/machineContext";

// lowdah 
const _ = require("lodash");  



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





const Chart = () => {
   const { machines, setMachines,section } = useContext(MachineContext);
   useEffect(() => {
     async function getMachines() {
       if (section >= 1) {
         const res = await axios.get(selectEndpoint(section));
         setMachines(res.data);
       }
     }

     getMachines();
   }, [section]);

  
  const [machine, setMachine] = useState("01"  );
  const [sensor, setSensor] = useState("Pressure");
  const [graphType, setGraphType] = useState("area");
  const handleChangeSensor = (event) => {
    setSensor(event.target.value);
  };

  const handleMachineChange = (event) => {
    setMachine(event.target.value);
  };

  const handleGraphTypeChange = (event) => {
    setGraphType(event.target.value);
  };

  // retrieve index of selected machine on machine select box.
  const selectedMachine = Object.values(machines)[parseInt(machine)% 6]; //? <- hard coded value.
  const max = "max_values";
  const max_arr = _.get(selectedMachine, max,"default"); // /
  const min ="min_values";
  const min_arr= _.get(selectedMachine,min,"default");

  return (
    <div>
      <div className="chart-header">
        <div className="chart-header-text">
          <span className="chart-header-text">Real-time data</span>
        </div>
        <div className="chart-header-section">
          <Box sx={{ minWidth: 130 }}>
            <FormControl
              sx={{ m: 1, minWidth: 110, border: "1px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Machine</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={machine}
                label="Machines"
                onChange={handleMachineChange}
                input={<BootstrapInput />}
              >
                {machines.map((machine) => (
                  <MenuItem value={machine.topic_id.substring(20, 22)}>
                    Machine {machine.topic_id.substring(20, 22)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 130 }}>
            <FormControl
              sx={{ m: 1, minWidth: 110, border: "1px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Sensor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sensor}
                label="Sensor"
                onChange={handleChangeSensor}
                input={<BootstrapInput />}
              >
                {Object.keys(max_arr)
                  .filter((o) => o !== "last_updated")
                  .map((s) => (
                    <MenuItem value={s}>{s}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 130 }}>
            <FormControl
              sx={{ m: 1, minWidth: 110, border: "1px" }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Graph</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={graphType}
                label="Type"
                onChange={handleGraphTypeChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={"line"}>Line</MenuItem>
                <MenuItem value={"area"}>Area</MenuItem>
                <MenuItem value={"bar"}>Bar</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <AreaChart machine={machine} sensor={sensor} graphType={graphType}  min={min_arr[sensor]} max= {max_arr[sensor]}/>

      {/* End Real time data/chart  */}
    </div>
  );
};

export default Chart;
