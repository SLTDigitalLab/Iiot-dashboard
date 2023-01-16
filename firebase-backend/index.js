import express from "express";
import cors from "cors";
import machineRoute from "./routes/machines.js";
import chartRoute from "./routes/charts.js";
import thresholdRoute  from "./routes/thresholds.js";
import notificationRoute from "./routes/notifications.js";
import customizeRoute from "./routes/customize.js";


const app= express();
app.use(express.json());
app.use(cors());

app.use("/api/machines",machineRoute);
app.use("/api/charts",chartRoute);
app.use("/api/thresholds",thresholdRoute);
app.use("/api/notifications",notificationRoute);
app.use("/api/customize",customizeRoute);


app.listen(4000, ()=>{
    console.log('connected');
});

