
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
//Set up the total value for each air conditioner as a variable for the main code. The main code is saved for after we have all three variables from the user's input.

var airCond = 5000;

//Make sure to validate the prompts with a while loop
 var livLength=prompt("Let's start with the length of your living room in feet?");
 while (livLength==="" || isNaN(livLength)) {
 livLength = prompt("Please do not leave blank and only type in numbers.\nWhat is length of your living room in feet?");
}
 //Find out what the length of the first room, the living room, is in cubic feet.
 console.log("Your living room is " + livLength + " feet long.");

 //Validate with a while loop.
 var livWidth=prompt("Now, what is the width of your living room in feet?");
 while (livWidth==="" || isNaN(livWidth)){
  livWidth = prompt("Please do not leave blank and only type in numbers.\nWhat is width of your living room in feet?");
 }
 //Now we have the width of the living room in cubic feet.
 console.log("Your living room is " +livWidth+ " feet wide.");

 //Validate with a while loop
 var livHeight=prompt("Finally, what is the height of your living room in feet?");
 while (livHeight==="" || isNaN(livHeight)) {
  livHeight = prompt("Please do not leave blank and only type in numbers.\nWhat is height of your living room in feet?");
 }
 //Finally we have the last integer to find the cubic feet of the Living room.
 console.log("Your living room is " + livHeight + " feet high.");

 //Set the Living room function call

 var totalLiv = calcLivRoom (livLength, livWidth, livHeight);

 //now pass the arguments to the parameters below
 function calcLivRoom (l,w,h){
  areaLiv = l * w * h;
  return areaLiv;
 }
//the return, spits the information out to the var totalLiv, and is now ready to perform additional calculations.

 //Now, print out the results of the living room and see how much room you have for extra rooms.
 console.log("Your living room is " +totalLiv+ " cubic feet.");
 console.log("You have " +(airCond - totalLiv)+ " cubic feet left.");

 // We need to keep the result from the last calculation to refer to in the following room calculations. Could this be where we enter our anonymous function? Let's try it and see later in the program.

 /*
 var totalAirConditioner = function(areaLiv, areaRoom1, areaRoom2, areaRoom3, areaBath1, areaBath2, areaGarage) {
  var totalArea = (totalLiv + totalRoom1 + totalRoom2 + totalRoom3 + totalBath1 + totalBath2 + totalGarage);
  return totalArea;
 }*/

// -------
 //Now repeat for each room in the home. If they come to a question regarding the amount of rooms-this could be where we place an anonymous function into the code-such as 'no', we can continue to the next set of questions such as a garage or Florida room. If they have neither, or they don't want to condition the air in the following rooms we will know how many air conditioners they need at the end.
// -------



