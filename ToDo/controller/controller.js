let bodyParser = require('body-parser');
let mongoose = require('mongoose');
//let data = [{'item': 'first'},{'item': 'second'}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

//conect to database

mongoose.connect('mongodb://admin:admin@ds247499.mlab.com:47499/todo-app-kosi');

let todoSchema = new mongoose.Schema({
	item: String
});

let Todo = mongoose.model('Todo', todoSchema);
/*let itemOhe = Todo({item: 'first'}).save( (err) => {
    if (err) throw err;
    console.log('item saved')
});*/


module.exports = function (app) {

	app.get("/", (req, res) => {
		Todo.find({}, (err, data) => {
			if (err) throw err;
			res.render("todo", {todos: data})
		});
	});

	app.post("/", urlencodedParser, (req, res) => {
		Todo(req.body).save( (err, data) => {
			if (err) throw err;
			res.json(data);
		});
	});

	app.delete("/:item", (req, res) => {

		Todo.find({item: req.params.item.replace(/-/g, ' ')}).remove( (err, data) => {
			if (err) throw err;
			res.json(data);
		});
	});
};