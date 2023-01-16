import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";


export const getSectionsByCompany=(req,res)=>{

    const SectionRef = ref(database, '/A_0001');
    const sections=[]
    onValue(SectionRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    const secKey = childSnapshot.key;
    
    const machineRef= ref(database,'/A_0001'+secKey);
    onValue(machineRef,(snapshot)=>{
      snapshot.f
    })
   
  });
   
  
    res.send(sections);
});

}

export const getMachineLocations =(req,res)=>{







}




 


