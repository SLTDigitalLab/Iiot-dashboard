import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";

export const getCurrentValuesByMachineSendNotifications=(req,res)=>{
  const section = req.params.id;
  const machine_id = req.params.machine_id;
  const SensorRef= query(ref(database, '/A_0001/'+section+'/values/'+machine_id),orderByChild('timestamp'),limitToLast(1));
  const Sensors=[];
  onValue(SensorRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childData =childSnapshot.val();
       for(const key in childData){
        var obj = {}; //? <---- Move declaration inside loop
         obj['sensor_name'] = key;
        obj['current_val'] = childData[key];
        Sensors.push(obj);
       }
        const UpdatedSensors = Sensors.filter(object => {
        return object.sensor_name !== "timestamp";});

        const notification_time = Sensors.filter(object => {
        return object.sensor_name === "timestamp";
      });
   
      const MachineRef = ref(database, '/A_0001/'+section+'/machines/'+machine_id);
      const MachineValues=[];
    
      onValue(MachineRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          MachineValues.push(childData);
        });
        /*  res.send(MachineValues.max_values); */

        const notifications=[];
         UpdatedSensors.map((sensor)=>{
          const sensor_name= sensor.sensor_name;
          const current_value = sensor.current_val;
          //find max
          const max= MachineValues[1][sensor_name]; //? <- max_values
          //find min
          const min= MachineValues[2][sensor_name]; //? <- min_values
          
          current_value <min ? notifications.push({machine_id:machine_id,section:section ,sensor_name:sensor_name, exceed:false,current_value:current_value, maximum_value:max,minimum_value:min, timeSend:notification_time[0].current_val}) : current_value>max?  notifications.push({machine_id:machine_id,section:section ,sensor_name:sensor_name,exceed:true,current_value:current_value, maximum_value:max,minimum_value:min,timeSend:notification_time[0].current_val}):null; 

        }); 

        res.send(notifications);
      },{
        onlyOnce: true
      });


  });
  },{
    onlyOnce: true
  });





/* MachineValues[1] - max_values
MachineValues[2]- min_values
MachineValues[3]- topic_id */




}