import React,{useState,useContext,useEffect} from 'react';
import "./notification.css";
import axios from 'axios';

import { MachineContext } from '../../context/machineContext';

const Notifications = () => {

const {machines,setMachines,section,setSection,notifications,setNotifications} = useContext(MachineContext);
const [machineNotifications,setMachineNotifications] =useState([]);
const [notificationEPoint, setNotificationEPoint] =useState("");


async function getMachineNotifications(endpoint) {
 
  const res = await axios.get(endpoint);
  console.log(res.data);
  /* setNotifications((prev)=>[...prev,res.data]); */
}

  useEffect(()=>{
    
    machines.map((machine)=>{
  let NotificationEndPoint ="http://localhost:4000/api/notifications/" +"S_000" +section +"/d_0" +machine.topic_id.substring(19, 22);
      setNotificationEPoint(NotificationEndPoint);
       getMachineNotifications(notificationEPoint);
  })
   
},[section]);


  return (
    <div>
    
      {notifications.map((n) => (
        <p>{n.topic_id}</p>
      ))}
    </div>
  );
}

export default Notifications