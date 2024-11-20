const recipies = [
    {
        id: 1,
        name: "Panner fired rice",
        procedure: "take fresh panneer, fried rice in the stove with rice and stir it",
        ingredients: "Paneer, Tomato, Onion, Capsicum", 
        Duration: 30
    },
    {
        id: 2,
        name: "Egg fired rice",
        procedure: "take 2eggs fried rice in the stove with rice and stir it",
        ingredients: "Eggs, Tomato, Onion, Capsicum", 
        Duration: 30
    },
    {
        id: 3,
        name: "Chicken fired rice",
        procedure: "take fresh chicken, fried rice in the stove with rice and stir it",
        ingredients: "Chicken, Tomato, Onion, Capsicum", 
        Duration: 30
    },
    {
        id: 4,
        name: "Mutton fired rice",
        procedure: "take fresh mutton, fried rice in the stove with rice and stir it",
        ingredients: "Mutton, Tomato, Onion, Capsicum", 
        Duration: 30
    },
    {
        id: 5,
        name: "Beef fired rice",
        procedure: "take fresh beef, fried rice in the stove with rice and stir it",
        ingredients: "Beef, Tomato, Onion, Capsicum", 
        Duration: 30
    }
]

//get method
export const getRecipies = (req,res) => {
    res.status(200).json({data:recipies,message:"recipies fetched successfully"});
};


//getById method
export const getRecipiesById = (req,res) => {
    const recipieId = req.params.id;
    const recipie = recipies.find((recipie) => recipie.id == recipieId);
    if(!recipie) {
        res.status(404).json({message:"recipie not found"});
    }
    res.status(200).json({data:recipie,message:"recipie fetched successfully"});
};

//post method
export const createRecipie = (req,res) => {
    const {name,procedure,ingredients,Duration} = req.body;

    const newRecipie = {
        id:recipies.length + 1,
        name,
        procedure,
        ingredients,
        Duration
    }

    recipies.push(newRecipie);
    res.status(200).json({data:newRecipie,message:"new Recipie created successfully"});

}

//put method
export const updateRecipie = (req,res) => {
    const RecipieId = req.params.id;
    const {name,procedure,ingredients,Duration} = req.body;

    const Recipiedetail = recipies.find((ele) => ele.id == RecipieId);

    if(Recipiedetail){
        Recipiedetail.name = name;
        Recipiedetail.procedure = procedure;
        Recipiedetail.ingredients = ingredients;
        Recipiedetail.Duration = Duration;
        res.status(200).json({data:Recipiedetail,message:"Recipie updated successfully"});
    }else{
        res.status(404).json({message:"Recipie not found"});
    }
}

//delete method
export const deleteRecipie = (req,res) => {
    const RecipieId = req.params.id;
    const index = recipies.find((ele) => ele.id == RecipieId);

    if(index ===-1){  
        return res.status(404).json({message:"Recipie not found"}); 
    }  
        
        recipies.splice(index,1);    
        res.status(200).json({message:"Recipie deleted successfully"});
    };
    
