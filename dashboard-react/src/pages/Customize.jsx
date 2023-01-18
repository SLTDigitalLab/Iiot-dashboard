import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Box from "@mui/material/Box";



import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Leaflet from "leaflet";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});




 

function Customize() {
  const [sectionData,setSectionData] = useState([]);
 






useEffect(()=>{
  async function getSectionData(){
    const res = await axios.get("http://localhost:4000/api/customize/A_0001"); //? <- Here A_0001 can be replaced once admin panel is set.
    setSectionData(res.data);
  }


  getSectionData();

},[]);
  return (
      <>
        <Box height={60} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 16,
            paddingTop: 22,
            fontWeight: 700,
            paddingLeft: 10,
          }}
        >
          <span>Machine Locations</span>
        </div>
        <MapContainer
          center={[6.927079, 79.861244]}
          zoom={8} // ? this value can be set to 13 when all locations are available around a district.
          scrollWheelZoom={false}
          style={{ height: "75vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sectionData.map(
            ({ sectionKey, machineId, address, latitude, longitude }) => (
              <Marker position={[latitude, longitude]}>
                <Popup>
                  <p style={{ color: "black", fontWeight: 700 }}>
                    Machine ID:{" "}
                    <span style={{ color: "teal", fontWeight: 700 }}>
                      {"SLT_IIoT/A_0001/" + machineId}
                    </span>{" "}
                  </p>
                  <p style={{ color: "black", fontWeight: 700 }}>
                    Section: <span style={{ color: "teal" }}>{sectionKey}</span>{" "}
                  </p>
                  <p style={{ color: "black", fontWeight: 700 }}>
                    Address: <span style={{ color: "teal" }}>{address}</span>{" "}
                  </p>
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      </>
    );
}



export default Customize