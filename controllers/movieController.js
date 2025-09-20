export const MovieIndex=(req,res)=>{
    res.send("Get all movies");
};

export const MovieCreate=(req,res)=>{
    res.send("Add a new movie");
};  

export const MovieUpdate=(req,res)=>{
    res.send(`Update movie`);
};

export const MovieDelete=(req,res)=>{
    res.send(`Delete movie`);
};