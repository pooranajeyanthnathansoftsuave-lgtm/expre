import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Get all movies");
})

router.post('/',(req,res)=>{
    res.send("Add a new movie");
})

router.put('/:id',(req,res)=>{
    res.send(`Update movie `);
})

router.delete('/:id',(req,res)=>{
    res.send(`Delete movie `);
})


export default router;
