var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todos.js');
var {User} = require('./models/users.js');

var {ObjectId} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find({
        text: "Give a shit"
    }).then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
})

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectId(id)){
        res.status(404).send({});
    }else{
        Todo.findById(id).then((doc)=>{
            if(doc){
                res.send({doc});
            }else{
                res.status(404).send({});
            }
        }).catch((err)=>{
            res.status(404).send({});
        });

    }
});

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})