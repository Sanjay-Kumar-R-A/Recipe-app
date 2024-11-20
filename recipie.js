//Importing the required Packages

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import recipieRouters from './Routers/recipieRouters.js';

//to configure the dotenv package
dotenv.config();

//Express initialization
const app = express();

//cors middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


//default middleware to use post method body
app.use(express.json());

//Default Route
app.get("/",(req,res)=>{
    res.status(200).send("Welocme to the Recipie API");
});


//Custom routes from Routers
app.use("/api/recipieApp", recipieRouters);


//Port to run the server
const port = process.env.PORT || 5000;

//Start the server
app.listen(port,()=>{
    console.log("Recipie WebApp Server is started and running successfully ");
})