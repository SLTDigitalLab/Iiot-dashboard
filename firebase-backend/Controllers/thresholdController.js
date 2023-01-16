import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";

export const getMinimumValuesByMachine=(req,res)=>{




}

export const getMaximumValuesByMachine=(req,res)=>{
  const section = req.params.id;
  const machine_id = req.params.machine_id;
  const machineRef= query(ref(database, '/A_0001/'+section+'/machines/'+machine_id+"/max_values"));
  const max_values=[];
  onValue(machineRef, (snapshot) => {
    const Data= snapshot.val();
      for(const key in Data){
        var obj = {}; //? <---- Move declaration inside loop
         obj['sensor_name'] = key;
        obj['max_value'] = Data[key];
       
        max_values.push(obj);
        //? sensors contains last_updated as an object. so following method removes that object.
       }
       const UpdatedThresholds = max_values.filter(object => {
        return object.sensor_name !== "last_updated";
      });
      res.send(UpdatedThresholds);


},{
    onlyOnce: true
  });




}