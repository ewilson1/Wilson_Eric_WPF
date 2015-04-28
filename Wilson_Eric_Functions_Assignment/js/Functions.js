
 /*
Eric Wilson
SDI Section 01
Functions Assignment (test)
April 28th, 2015

 


alert("Test to see if they are connected.");
 console.log("Test to see if they are connected.");
//They are connected.
 */


//Build a calculator. You need 1 Normal function, and 1 Anonymous function which must use arguments and parameters. Each function must contain at least 3 parameters. A value must be returned for each function and saved in a variable in the main code. Must pass arguments to the parameters. All user prompts must be validated using a while loop.

 alert("Welcome to Florida, it gets steamy here!\nLet's find out how many air conditioners you need to cool your home.\n-----\nTake notice: each air conditioner can effectively cool 5,000 cubic feet per house.");

 //var livArray = [livLength, livWidth, livHeight];

 var livLength=prompt("Let's start with the length of your living room in feet?");
while (livLength==="" || isNaN(livLength)){
  livLength = prompt("Please do not leave blank and only type in numbers.\nWhat is length of your living room in feet?");
 console.log("Your living room is " +livLength+ " feet long.");
 }