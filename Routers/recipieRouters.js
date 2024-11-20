import express from "express";

import {createRecipie, getRecipies,getRecipiesById,updateRecipie,deleteRecipie} from "../Controllers/recipieControllers.js"; 

const router = express.Router();


router.get("/allrecipies",getRecipies);
router.get("/recipies/:id",getRecipiesById);
router.post("/createnewrecipie",createRecipie);
router.put("/updaterecipie/:id",updateRecipie);
router.delete("/deleterecipie/:id",deleteRecipie);




export default router;