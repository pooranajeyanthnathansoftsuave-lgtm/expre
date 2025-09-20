import Movie from "../models/moviemodel.js";

export const MovieIndex=async(req,res)=>{
    res.send("Get all movies");
};

export const MovieCreate=async (req,res)=>{
    // id title desc
    

    const newMovie = new Movie({
        title : req.body.title,
        desc : req.body.desc
    });

    try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    }catch(err){
        console.error(err);
        return res.status(400).json({message:err.message});
    }

    return res.json(req.body);
};  

export const MovieUpdate=(req,res)=>{
    res.send(`Update movie`);
};

export const MovieDelete=(req,res)=>{
    res.send(`Delete movie`);
};