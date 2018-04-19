let bodyParser = require('body-parser');
let data = [{'item': 'first'},{'item': 'second'}];
let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get("/todo", function (req, res) {
        res.render("todo", {todos: data});
    });
    app.post("/todo", urlencodedParser, function (req, res) {
       console.log(req.body);
       data.push(req.body);
       res.json(data);
    });
    app.delete("/todo/:item", function (req, res) {
        console.log("start delete");

        data = data.filter(function (value) {
            console.log(value.item.replace(/ /g, '-'));
            console.log(req.params.item);
            return value.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
        console.log(data);
    });
}; 