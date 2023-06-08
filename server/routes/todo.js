const express = require('express')
const router = express.Router()
const todo = require('../modules/todo')

router.get('/', async (req,res)=>{
    try{
        const todos = await todo.find()
        res.json(todos)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.get('/:id',getTodo, async (req,res)=>{
    res.json(res.todo)
})

router.post('/', async (req,res)=>{
    const addTodo = new todo({
        task:req.body.task,
        date:req.body.date,
        isDane:req.body.isDane,
        isEdit:req.body.isEdit
    })
    try{
        const newTodo = await addTodo.save()
        res.status(201).json(newTodo)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

router.patch('/:id', getTodo, async (req,res)=>{

    req.body.task != null? res.todo.task = req.body.task : null;
    req.body.isDane != null? res.todo.isDane = req.body.isDane : null;
    req.body.isEdit != null? res.todo.isEdit = req.body.isEdit : null;

    // if(req.body.task != null){
    //     res.todo.task = req.body.task
    // }
    // if(req.body.isDane != null){
    //     res.todo.isDane = req.body.isDane
    // }
    // if(req.body.isEdit != null){
    //     res.todo.isEdit = req.body.isEdit
    // }

    try{
        const updatedTodo = await res.todo.save()
        res.json(updatedTodo)
    }catch(err){
        res.status(400).json({message:err.message})
    }
   
})

router.delete('/:id', getTodo, async (req,res)=>{
    try{
        await res.todo.deleteOne()
        res.json({message:'Deleted Todo'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

async function getTodo (req, res, next){
    
    let todo_by_id
    try{
        todo_by_id = await todo.findById(req.params.id)
        if(todo_by_id == null){
            return res.status(404).json({message:'Cannot find todo'})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.todo = todo_by_id
    next()
}

module.exports = router