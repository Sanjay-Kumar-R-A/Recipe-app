import recipies from "../models/recipieSchema.js";

//createRecipe: Create a new recipe using POST method
export const createRecipe = async (req, res) => {
    try{
        const newRecipie = await recipies.create(req.body);
        await newRecipie.save();
        res.status(200).json({message: "Recipie created successfully",data: newRecipie});
    }catch(error){
        res.status(500).json({message: "Internal server error in creating recipies",data: error});
    }
}

//getAllRecipes: Get all recipies using GET method
export const getAllRecipies = async (req, res) => {
    try{
        const recipieData = await recipies.find();
        res.status(200).json({message: "Recipies fetched successfully",data: recipieData});
    }catch(error){
        res.status(500).json({message: "Internal server error in fetching recipies",data: error});
    }
}

//getRecipeById: Retrieve a single recipe by ID using GET method
export const getRecipeById = async (req, res) => {
    try{
        const recipieData = await recipies.findById(req.params.id);
        if(!recipieData){
            return res.status(404).json({message: "Recipie not found"});
        }
        res.status(200).json({message: "Recipie fetched successfully",data: recipieData});
    }catch(error){
        res.status(500).json({message: "Internal server error in fetching recipies",data: error});
    }
}

//updateRecipe: Update a recipe by ID using PUT method
export const updateRecipe = async (req, res) => {
    try{
        const recipieData = await recipies.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!recipieData){
            return res.status(404).json({message: "Recipie not found"});
        }
        res.status(200).json({message: "Recipie updated successfully",data: recipieData});
    }catch(error){
        res.status(500).json({message: "Internal server error in updating recipies",data: error});
    }
}

//deleteRecipe: Delete a recipe by ID using DELETE method
export const deleteRecipe = async (req, res) => {
    try{
        const recipieData = await recipies.findByIdAndDelete(req.params.id);
        if(!recipieData){
            return res.status(404).json({message: "Recipie not found"});
        }
        res.status(200).json({message: "Recipie deleted successfully",data: recipieData});
    }catch(error){
        res.status(500).json({message: "Internal server error in deleting recipies",data: error});
    }   
}