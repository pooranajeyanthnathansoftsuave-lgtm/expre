import Movie from "../models/moviemodel.js";

export const MovieIndex=async(req,res)=>{
    try{
        const movies = await Movie.find();
        return res.status(200).json(movies);
    }catch(err){
        console.error(err);
        return res.status(500).json({message:err.message});
    }
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

export const MovieDetail = async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        if (movie == null){
            return res.status(404).json({message:"Movie not found"});
        }
        else{
            res.json(movie);
        }

    }catch(err){
        console.error(err);
        return res.status(500).json({message:err.message});
    }
}
export const MovieUpdate=async (req,res)=>{
    try{
        const updatedMovie = await Movie.findOneAndUpdate({_id:req.params.id},{
        title:req.body.title,
        desc:req.body.desc
        },{
            new:true,
        });
        res.status(200).json(updatedMovie);
    }
    catch(err){
        console.error(err);
        return res.status(400).json({message:err.message});
    }
 
    
};

export const MovieDelete=async (req,res)=>{
    const MovieId = req.params.id;
    
    try{
        await Movie.deleteOne({_id:MovieId});
        res.json({message:"Movie deleted successfully"});

    }
    catch(err){
        console.error(err);
        return res.status(500).json({message:err.message});
    }
    
    
};