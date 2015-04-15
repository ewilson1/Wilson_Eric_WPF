/*
 Eric Wilson, April 15th, 2015 Slice of Pie Part One//

 We need to find out how many slices pizza each of the attendees will get; this will be a floating number
 */

var people; // declaration, in this case how many people are at the party
people = 10; // definition; this is how many people are at the party
var pizzas; // declaration for what they will be splitting up evenly
pizzas = 4; // definition; this is number of pizza's ordered
var slices; // declaration; they will be sharing slices of pizza
slices = 8; // definition; this is the amount of slices per pizza; 1 pizza has 8 slices each
var result = (pizzas * slices) / (people); //this division operator will give us a floating number
console.log("Each Person ate " + result + " slices of pizza at the party");

