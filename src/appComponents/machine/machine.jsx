import React, { useState, useEffect, useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

import axios from "axios";
const _ = require("lodash");  
//dark theme
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//application files
import Sensor from "../sensor/sensor";
import "./machine.css";
import { MachineContext } from "../../context/machineContext";


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

const Machine = (props) => {
  const { section, setSection} = useContext(MachineContext);
  const [expanded, setExpanded] = useState(false);
  const [sensorCount, setsensorCount] = useState(3);
  const [sensors, setSensors] = useState([]);
  const [machineNotifications, setMachineNotifications] = useState([]);
  const {notifications, setNotifications}= useContext(MachineContext);
  

  const { id, minValues,maxValues } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const section_id = "S_000" + section;
  const MachineEndPoint ="http://localhost:4000/api/machines/" +section_id +"/d_0" +id.substring(19, 22);
 
  useEffect(() => {
    function selectNoOfSensorCount() {
      expanded ? setsensorCount(6) : setsensorCount(3);
    }

    async function getMachineSensors() {
      const res = await axios.get(MachineEndPoint);
      setSensors(res.data);
    }

    selectNoOfSensorCount();
    getMachineSensors();
  });

 

    /* useEffect(() => {
    setNotifications([...notifications, ...machineNotifications]);
    setMachineNotifications([]);
  }, [machineNotifications]); */





  // ? <- here sensors contain timestamp : 12345678 , this value is need to send notifications, but does not
  // ? required to view sensors and its corresponding current values. so updatedSensors array will contain the filtered values.

   const UpdatedSensors = sensors.filter(object => {
        return object.sensor_name !== "timestamp";
      });

     const tValue= sensors.filter(object => {
        return (object.sensor_name === "timestamp");
      });
 

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p className="font-weight-bold">
            <span>Machine </span>
            {id.substring(20, 22)}
          </p>
        </div>
        <div className="card-body">
          {UpdatedSensors.slice(0, sensorCount).map((sensor) => (
            <Sensor
              key={sensor.sensor_name}
              sensor_name={sensor.sensor_name}
              current_value={sensor.current_val}
              min={minValues[sensor.sensor_name]}
              max={maxValues[sensor.sensor_name]}
              machine_id={id}
              timestamp={tValue[0].current_val}
              section = {section}
            />
          ))}
          <div className="button-div">
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
  );
};

export default Machine;
