import express from 'express';
const app = express();
const PORT = 6969;
app.get('/',(req,res)=>{
    res.json({msg:"Hello World"});
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});