import Person from './modules/Examples2'

// tutorial code below 

class Adult extends Person {
	getDinner() {
		console.log("By the way, " + this.name + " will pickup dinner tonight.");
	}
} 

var joe = new Person("Biggie Dave", "Pee Wee Watson");
joe.greet();

var sarah = new Adult("Super Sarah", "Ariana Grande");
sarah.greet();
sarah.getDinner();