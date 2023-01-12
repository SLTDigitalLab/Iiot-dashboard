import React, { useState, useEffect } from "react";
import "./threshold.css";

//mui
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

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








function valuetext(value) {
  return `${value}`;
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Threshold = (props) => {
  const { id, min, max } = props;

  const [sensor, setSensor] = React.useState("Pressure");
  const [value, setValue] = React.useState([10, 15]);
  const [expanded, setExpanded] = useState(false);
 
  useEffect(() => {});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeSensor = (event) => {
    setSensor(event.target.value);
    handleSliderMarks(
      event.target.value,
      min[event.target.value],
      max[event.target.value]
    );
  };

  const getSensorSiUnit = (sensor_name) => {
    return sensor_name === "Pressure"
      ? "Pa"
      : sensor_name === "Humidity"
      ? "q"
      : sensor_name === "Noise level"
      ? "Db"
      : sensor_name === "Vibration"
      ? "Hz"
      : sensor_name === "Temperature"
      ? "°C"
      : sensor_name === "Radiation"
      ? "Bq"
      : null;
  };

  const marks = [
    {
      value: 0,
      label: "0" + " " + `${getSensorSiUnit(sensor)}`,
    },
    {
      value: min[sensor],
      label: `${min[sensor]}` + " " + `${getSensorSiUnit(sensor)}`,
    },
    {
      value: max[sensor],
      label: `${max[sensor]}` + " " + `${getSensorSiUnit(sensor)}`,
    },
  ];

  const handleSliderMarks = (sensor_name, max_val, min_val) => {
    const siUnit = getSensorSiUnit(sensor_name);
    marks.push({ value: min_val, label: min_val + siUnit });
    marks.push({ value: max_val, label: max_val + siUnit });
  };

  // ? <- extracting key values from prop 'max'
  var sensor_names = Object.keys(max);
  // ? <- sensor_names contain last_updated value

  //? <-data table rows and columns.
  const columns = [
    { field: "sensorName", headerName: "Sensor", width: 130 },
    { field: "minValue", headerName: "Minimum value", width: 130 },
    { field: "maxValue", headerName: "Maximum value", width: 130 },
  ];

  const rows = sensor_names
    .filter((o) => {
      return o !== "last_updated";
    })
    .map((s) => ({
      id: s,
      sensorName: s,
      minValue: min[s] + " " + getSensorSiUnit(s),
      maxValue: max[s] + " " + getSensorSiUnit(s),
    }));

  /* , */

  return (
    <div>
      <div className="threshold-card">
        <div className="cardheader">
          <h3 style={{ color: "teal" }}> Machine {id.substring(20, 22)}</h3>
        </div>
        <div className="cardbody">
          <div className="sensor">
            <div className="sensor-name">
              <Box sx={{ m: 1, minWidth: 160 }}>
                <FormControl
                  sx={{ m: 1, minWidth: 100, border: "1px" }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">Sensor</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sensor}
                    label="sensor"
                    input={<BootstrapInput />}
                    onChange={handleChangeSensor}
                  >
                    {sensor_names
                      .filter((o) => {
                        return o !== "last_updated";
                      })
                      .map((s) => (
                        <MenuItem value={s}>{s}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="sensor-value">
              <Box className="sensor-value-box" sx={{ width: 350 }}>
                <Slider
                  getAriaLabel={() => `${sensor} range`}
                  value={value}
                  onChange={handleChange}
                  getAriaValueText={valuetext}
                  marks={marks}
                  valueLabelDisplay="auto"
                  max={max[sensor] + 5}
                  color="secondary"
                  marksColor="primary"
                />
              </Box>
            </div>

            <div className="button-div">
              <Button size="small" variant="outlined" color="secondary">
                Save
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon
                  style={{
                    color: "teal",
                    borderRadius: 15,
                  }}
                />
              </ExpandMore>
            </div>
          </div>
        </div>
      </div>
      {expanded === true ? (
        <div
          style={{
            height: 400,
            width: "100%",
            paddingBottom: 10,
            paddingRight: 10,
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      ) : null}
    </div>
  );
};

export default Threshold;
