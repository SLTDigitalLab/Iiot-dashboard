import {useState,createContext} from "react";

export const MachineContext =createContext();

export const MachineContextProvider = ({children})=>{

        const [section, setSection]= useState(1);
        const [machines, setMachines] = useState([]);
        const [ notifications, setNotifications]=useState([]);

    
        return (
            <MachineContext.Provider value={{section,setSection,machines,setMachines,notifications,setNotifications}}>
                {children}
            </MachineContext.Provider>
        )

}