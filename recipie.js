//Importing the required Packages

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './Database/dbConfig.js';
import recipieRouters from './Routers/recipieRouters.js';

//to configure the dotenv package
dotenv.config();

//Express initialization
const app = express();
//default middleware to use post method body
app.use(express.json());
//cors middleware
app.use(cors());


connectDB();

//Default Route
app.get("/",(req,res)=>{
    res.status(200).send("Welocme to the Recipie API");
});


app.use("/api/recipieapp",recipieRouters);

//Port to run the server
const port = process.env.PORT || 5000;

//Start the server
app.listen(port,()=>{
    console.log("Recipie WebApp Server is started and running successfully");
})