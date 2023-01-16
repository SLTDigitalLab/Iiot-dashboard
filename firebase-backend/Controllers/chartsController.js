import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";

export const getValuesBySensor=(req,res)=>{

    const section = req.params.id;
    const machine_id= req.params.machine_id;
    const sensor= req.params.sensor;
    const SensorRef= query(ref(database, '/A_0001/'+section+'/values/'+machine_id+"/"),orderByChild('timestamp'),limitToLast(6));
    const dataValues=[];
    const timeValues=[];
    onValue(SensorRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childData =childSnapshot.val();
        for(const key in childData){
            if(key===sensor){
                dataValues.push(childData[key]);
            }
            if(key==="timestamp"){

                timeValues.push(new Date(childData[key]*1000).toLocaleTimeString());
            }
       }
        });
        res.send({dataValues,timeValues});
       /*  dataValues = allValues.filter(object => {
        return object.sensor_name !== "timestamp";
      }); */
    },{
        onlyOnce: false
    });



}