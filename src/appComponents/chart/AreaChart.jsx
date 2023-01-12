import React, { useState, useEffect, useContext } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

//application files
import { MachineContext } from "../../context/machineContext";

export default function AreaChart(props) {
  const { machine, sensor, graphType,min, max } = props;
  const { section } = useContext(MachineContext);
  const [getDatatime, setGetDatatime] = useState([]);
  const [getDataBySensor, setGetDataBySensor] = useState([]);

  const selectEndPoint = (section, mid, sensor) => {
    const sid = "S_000" + section;
    const machine_id = "d_00" + mid;
    const endpoint =
      "http://localhost:4000/api/charts/" +
      sid +
      "/" +
      machine_id +
      "/" +
      sensor;
    return endpoint;
  };

  useEffect(() => {
    async function getDataBySensorName() {
      const res = await axios.get(selectEndPoint(section, machine, sensor));
      setGetDatatime(res.data.timeValues);
      setGetDataBySensor(res.data.dataValues);
    }
    getDataBySensorName();
  }, [section, machine, sensor]);

  return (
    <React.Fragment>
      <Chart
        type={graphType === "area" ? "area" : graphType}
        width="100%"
        height={255}
        series={[
          {
            name: sensor,
            data: getDataBySensor, //[212,334,566,343,213,100,56,358]
          },
        ]}
        options={{
          title: {
            text: "",
            style: { fontSize: 10 },
          },
         

          stroke: { width: 2, curve: "smooth" },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },

          xaxis: {
            title: {
              style: { fontSize: 10, color: "#EE2364", fontFamily: "Roboto" },
            },
            categories: getDatatime, //[21,22,23,24,25,26,27,28]
          },
          yaxis: {
            title: {
              text: sensor,
              style: { fontSize: 15, color: "#EE2364", fontFamily: "Roboto" },
            },
          },
          annotations: {
            yaxis: [
              {
                y: min,
                borderColor: "#00E396",
                label: {
                  borderColor: "#00E396",
                  style: {
                    color: "#fff",
                    background: "#00E396",
                  },
                  text: "Minimum",
                },
              },
              {
                y: max,
                borderColor: "#FF4560",
                borderWidth: 2,
                label: {
                  borderColor: "#FF4560",
                  style: {
                    color: "#fff",
                    background: "#FF4560",
                  },
                  text: "Maximum",
                },
              },
            ],
          },
        }}
      ></Chart>
    </React.Fragment>
  );
}
