// example code for classes, etc.

class Person {
	constructor(name, favoriteSinger) {
		this.name = name;
		this.favoriteSinger = favoriteSinger;
	}

	// greet is method of Person class
	greet() {
		console.log("Hey there, I'm " + this.name + ", the best singer is " + this.favoriteSinger + ".");
	}
}

export default Person;