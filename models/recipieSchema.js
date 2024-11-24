import mongoose from "mongoose";

const recipieSchema = new mongoose.Schema(
    {
    id: Number,
    name: String,
    procedure: String,
    ingredients: String,
    duration: String,
    }
);

const recipies = mongoose.model("recipies", recipieSchema);

export default recipies;
