import express from 'express';
import {createRecipe, getAllRecipies, getRecipeById, updateRecipe, deleteRecipe} from "../Controllers/recipieControllers.js";

const router = express.Router();

//custom routers
router.post("/createnewrecipie", createRecipe);
router.get("/getallrecipies", getAllRecipies);
router.get("/getrecipiebyid/:id", getRecipeById);
router.get("/updaterecipie/:id", updateRecipe);
router.delete("/deleterecipie/:id", deleteRecipe);



export default router;