/*
let fs = require('fs');
let date1 = new Date();
let readMe = fs.readFileSync('1.pdf');
fs.writeFileSync('2.pdf', readMe);
let date2 = new Date();
console.log(date2 - date1);
*/

/*
let fs = require('fs');
fs.readFile('1.pdf', function (err,data) {
	fs.writeFile('2.pdf', data);
});
*/

/*---------  Server  ------------*/
/*let http = require('http');
let server = http.createServer( (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hey Yooo');
});
server.listen(3000, '127.0.0.1');*/


/*
let http = require('http'),
	fs = require('fs');


let server = http.createServer( (req, res) => {
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log("start server");
*/

/*
let http = require('http'),
	fs = require('fs');


let server = http.createServer( (req, res) => {
	console.log("reload");
	res.writeHead(200, {'Content-Type': 'application/json'});
	let myObj = {
		name: 'Ryu',
		job: 'prog',
		age: 29
	};
	res.end(JSON.stringify(myObj));

});
server.listen(3000, '127.0.0.1');
console.log("start server");
*/

/*---------  routing  ----------*/

/*let http = require('http'),
	fs = require('fs');
let server = http.createServer( (req, res) => {

	if (req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if (req.url === '/api/nin'){
		let myObj = [{name: 'Ryu',job: 'prog',age: 29}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(myObj))
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});
server.listen(3000, '127.0.0.1');
console.log("start server");*/

/*--------- express routing  ----------*/

/*let express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.send("this is homepage")
});
app.get('/contact', (req, res) => {
	res.send("this is contact")
});

app.get("/profile/:id", (req, res) => {
	res.send("you regest to see profile with id " + req.params.id)
});

app.listen(3000);*/

/*

let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use('/style', express.static('style'));

app.get('/', (req, res) => {
	res.render('index')
});
app.get('/contact', (req, res) => {
	console.log(req.query);
	res.render('contact')
});

app.get("/profile/:id", (req, res) => {
	let data = {age: 29, job: 'programer', hobbies:['eating','sliping','swimming']};
	res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);
*/

