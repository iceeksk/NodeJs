let bodyParser = require('body-parser');
let mongoose = require('mongoose');
//let data = [{'item': 'first'},{'item': 'second'}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

//conect to database



mongoose.connect('mongodb://admin:admin@ds227939.mlab.com:27939/todo-angular');

let Schema = mongoose.Schema({
    createdAt:{
        type: Date,
        default: Date.now
    },
    todoText: String,
    todoDesc: String
});

let Todo = mongoose.model('Todo', Schema);
/*let itemOhe = Todo({item: 'first'}).save( (err) => {
    if (err) throw err;
    console.log('item saved')
});*/

module.exports = function (app) {

    app.get("/", (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            return res.json({'success':true,'message':'Todos fetched successfully',data});
        });
    });

    app.post("/", urlencodedParser, (req, res) => {
        Todo(req.body).save( (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete("/:item", (req, res) => {

        Todo.find({item: req.params.item}).remove( (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
};