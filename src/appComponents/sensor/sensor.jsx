import React, { useContext,useEffect,useState} from "react";
import Button from "@mui/material/Button";
import { FaRadiation } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiTempHotLine } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineVibration } from "react-icons/md";
import { RiVolumeVibrateLine } from "react-icons/ri";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//css
import "./sensor.css";
import { MachineContext } from "../../context/machineContext";





const getSensorIcon= (sensor_name)=>{

  //? <- this will change once the admin panel is implimented.
   return sensor_name === "Pressure" ? (
     <Button startIcon={<BsSpeedometer2 title={sensor_name} />}></Button>
   ) : sensor_name === "Humidity" ? (
     <Button startIcon={<WiHumidity title={sensor_name} />}></Button>
   ) : sensor_name === "Noise level" ? (
     <Button startIcon={<RiVolumeVibrateLine title={sensor_name} />}></Button>
   ) : sensor_name === "Vibration" ? (
     <Button startIcon={<MdOutlineVibration title={sensor_name} />}></Button>
   ) : sensor_name === "Temperature" ? (
     <Button startIcon={<RiTempHotLine title={sensor_name} />}></Button>
   ) : sensor_name === "Radiation" ? (
     <Button
       startIcon={
         <FaRadiation className="spin radiation-icon" title="Radiation" />
       }
     ></Button>
   ) : null;
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

 


const Sensor = (props) => {
    const { sensor_name, current_value, min, max, machine_id, timestamp,section } =props;
    const { notifications, setNotifications } = useContext(MachineContext);
    const [hoverText, setHoverText] = useState(
      current_value.toFixed(2) +" "+getSensorSiUnit(sensor_name)
    );



    

   
    return (
      <div>
        <div className="card-text" key={sensor_name}>
          <div className="sensor">
            <div className="sensor-icon"> {getSensorIcon(sensor_name)}</div>
            <div className="sensor-value">
              {" "}
              {current_value > max ? (
                <div>
                  <div className="blink max">
                    {" "}
                    <div className="outlier">
                      <span
                        className="current"
                        onMouseEnter={() =>
                          setHoverText([
                            React.createElement(ArrowDropUpIcon, {
                              style: { display: "inline-block" },
                            }),
                            React.createElement(
                              "span",
                              { style: { display: "inline-block" } },
                              (((current_value - max) / max) * 100).toFixed(1) +
                                "%"
                            ),
                          ])
                        }
                        onMouseLeave={() =>
                          setHoverText(
                            current_value.toFixed(2) +
                              " " +
                              getSensorSiUnit(sensor_name)
                          )
                        }
                      >
                        {hoverText}
                      </span>
                    </div>
                  </div>
                </div>
              ) : current_value < min ? (
                <div>
                  <div className="blink min">
                    {" "}
                    <div className="outlier">
                      <span
                        className="current"
                        onMouseEnter={() =>
                          setHoverText([
                            React.createElement(
                              "span",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                },
                              },
                              React.createElement(ArrowDropDownIcon)
                            ),
                            React.createElement(
                              "span",
                              { style: { display: "inline-block" } },
                              (((min - current_value) / min) * 100).toFixed(1) +
                                "%"
                            ),
                          ])
                        }
                        onMouseLeave={() =>
                          setHoverText(
                            current_value.toFixed(2) +
                              " " +
                              getSensorSiUnit(sensor_name)
                          )
                        }
                      >
                        {hoverText}
                      </span>
                      {/*   <span className="precentage">
                        {" "}
                        {(((min - current_value) / min) * 100).toFixed(1)}%{" "}
                      </span> */}
                    </div>
                  </div>
                </div>
              ) : (
                <span className="current">
                  {current_value.toFixed(2) +
                    " " +
                    getSensorSiUnit(sensor_name)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Sensor




