const express = require("express")
const Crud = require("../models/Crud")
// for using the multiple routes 
const router = express.Router()


//  routes no 1 for getting The All notes 
router.get('/gettodo', (req, res) => {
    try {
        Crud.find().then(data => {
            res.status(200).json({ data: data })
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// routes no 2 for creating the Todo List 
router.post('/createtodo', (req, res) => {
    try {
        const todo = new Crud({
            todo: req.body.todo
        })

        todo.save().then(data => {
            res.json({ message: "Success", data: data });
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// routes 3 updating The todo
router.put('/edittodo/:id', (req, res) => {
    const { todo } = req.body;
    try {
        const newTodo = {}
        if(todo){
            newTodo.todo = todo
        }
        Crud.findByIdAndUpdate(req.params.id, { $set: newTodo },{new:true}).then(data => {
          res.status(200).json({data:data})
      })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)
// route no 4 for deleting the todo
router.delete('/deletetodo/:id', async(req, res) => {
    try {
           Crud.findByIdAndDelete(req.params.id).then(data => {
            res.status(200).json({ massage: "note has been deleted", data: data })
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)


module.exports = router;