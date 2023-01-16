import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";

 
export const getMachinesBySection= (req,res)=>{
const section = req.params.id;
const MachineRef = ref(database, '/A_0001/'+section+'/machines');
 const Machines=[];
onValue(MachineRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childData = childSnapshot.val();
    Machines.push(childData);
  });
   res.send(Machines);
},{
  onlyOnce: true
});

}

export const getCurrentValuesByMachine=(req,res)=>{
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
        //? sensors contains timestamp as an object. so following method removes that object.
       }
      /*  const UpdatedSensors = Sensors.filter(object => {
        return object.sensor_name !== "timestamp";
      }); */
      res.send(Sensors);
    });
  },{
    onlyOnce: true
  });

}

