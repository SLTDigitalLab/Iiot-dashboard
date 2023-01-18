import { getDatabase, ref, onValue,query,limitToLast,orderByChild} from "firebase/database";
import {database} from "../config.js";


export const getSectionsByCompany=(req,res)=>{

    const SectionRef = ref(database, '/A_0001');
    const sections=[]
    onValue(SectionRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    const secKey = childSnapshot.key;
    
    const machineRef= ref(database,'/A_0001');
    onValue(machineRef,(snapshot)=>{
      snapshot.f
    })
   
  });
   
  
    res.send(sections);
});

}

export const getSectionsAndMachines=(req,res)=>{

  // Reference to the "A_0001" node
  const company_id= req.params.id;
  const companyRef = ref(database,company_id);
  const sectionsAndMachines = [];
  onValue(companyRef,(snapshot)=>{
      snapshot.forEach((childSnapshot) => {
    const sectionKey = childSnapshot.key;
    const sectionData = childSnapshot.val();
    const machines = sectionData.machines;
  
     Object.keys(machines).forEach((machineKey) => {
      const machineData = machines[machineKey];
      const location = machineData.location;
      const machineId = machineKey;
      const address = location.address;
      const latitude = location.latitude;
      const longitude = location.longitude;

      // Add the data to the sectionsAndMachines array
      sectionsAndMachines.push({
        sectionKey,
        machineId,
        address,
        latitude,
        longitude,
      });
    });
  
  });
   res.send(sectionsAndMachines);
  });

 

  // Return the sectionsAndMachines array
 
}



 


