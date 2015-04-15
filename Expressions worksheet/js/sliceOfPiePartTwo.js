/*
 Eric Wilson, April 15th, 2015 Slice of Pie Part One//

 We need to find out how many slices are left over for Sparky after all the people in the party
 have had the same amount of slices of pizza.
 */

var people; // declaration, in this case how many people are at the party
people = 10; // definition; this is how many people are at the party
var pizzas; // declaration for what they will be splitting up evenly
pizzas = 4; // definition; this is number of pizza's ordered
var slices; // declaration; they will be sharing slices of pizza
slices = 8; // definition; this is the amount of slices per pizza; 1 pizza has 8 slices each
var sparkySlices = (pizzas * slices) / (people); //this divison operator will give us a floating number
console.log("Each Person ate " + sparkySlices + " slices of pizza");
