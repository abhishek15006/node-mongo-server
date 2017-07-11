const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Mongo database connected');
    db.collection('Todos').insertOne({
        text: 'Hello mongo',
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert');
        }
        console.log(result);
    });
    db.close();
});