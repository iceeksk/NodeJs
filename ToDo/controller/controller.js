let bodyParser = require('body-parser');
let data = [{'item': 'first'},{'item': 'second'}];
let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get("/todo", (req, res) => res.render("todo", {todos: data}));

    app.post("/todo", urlencodedParser, (req, res) => {
        console.log(`Add new item ${req.body.item}`);
        data.push(req.body);
        res.json(data);
    });

    app.delete("/todo/:item", (req, res) => {
        console.log(`Delete item ${req.params.item}`);
        data = data.filter( (value) => value.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);
    });
};