import "./thresholds.css";
import React, { useEffect, useContext, useState } from "react";
import { MachineContext } from "../../context/machineContext";
import Threshold from "../threshold/threshold";
import axios from "axios";

//mui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import  ListItemText  from "@mui/material/ListItemText";
import { experimentalStyled as styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const selectEndpoint = (sid) => {
  return "http://localhost:4000/api/machines/S_000" + sid + "/machines";
};

const Thresholds = () => {
  const { section, setSection, machines, setMachines } =
    useContext(MachineContext);
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

  const handleChange = (event) => {
    setSection(event.target.value);
  };
  return (
    <>
      <Box sx={{ height: 60, display: "flex", flexDirection: "row" }}>
        <Item>
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
        </Item>
      </Box>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item xs={12}>
          {machines.map((machine) => (
            <Item>
              <ListItemText primary={machine.topic_id} />
              <Threshold
                key={machine.topic_id}
                id={machine.topic_id}
                max={machine.max_values}
                min={machine.min_values}
              />
            </Item>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Thresholds;


{/*    */}