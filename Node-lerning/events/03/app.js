let evt = require('events');
let count = 0;
let print = (item = 0) => {
	count++;
	console.log("count = " + (count + item))
};

let emiter = new evt.EventEmitter();

emiter.on('gogo', print);
emiter.emit('gogo', 1);
emiter.emit('gogo');
