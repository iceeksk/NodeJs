
function Animal(name){
	this.name = name;
}
Animal.prototype.speak = function(){
	console.log(this.name + " says:");
};

function Dog(name){
	Animal.call(this, name);
}
Dog.prototype.speak = function(){
	Animal.prototype.speak.call(this);
	console.log("woof");
};

function Cat(name){
	Animal.call(this, name);
}
Cat.prototype.speak = function(){
	Animal.prototype.speak.call(this);
	console.log("miaow");
};

let d = new Dog("Fido");
d.speak();

let c = new Cat("Lucy");
c.speak();
