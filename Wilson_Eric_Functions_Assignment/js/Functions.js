/*
 Eric Wilson
 SDI Section 01
 Functions Assignment
 April 28th, 2015

 alert("Test to see if they are connected.");
 console.log("Test to see if they are connected.");
 //They are connected.

 */

//Build a calculator. You need 1 Normal function, and 1 Anonymous function which must use arguments and parameters. Each function must contain at least 3 parameters. A value must be returned for each function and saved in a variable in the main code. Must pass arguments to the parameters. All user prompts must be validated using a while loop.

 alert("Welcome to Florida, it gets steamy here!\nLet's find out how many air conditioners you need to cool your home.\n-----\nTake notice: each air conditioner can effectively cool 2,500 cubic feet per house.");
//Set up the total value for each air conditioner as a variable for the main code. The main code is saved for after we have all three variables from the user's input.

var airCond = 2500;
console.log("You can cool up to 2,500 cubic feet of air with one air conditioner.");

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
 console.log("Your living room is " +totalLiv+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv)+ " cubic feet of air left to cool the home.");

 // We need to keep the result from the last calculation to refer to in the following room calculations. Could this be where we enter our anonymous function? Let's try it and see later in the program.

 //Or...we could do this. "You have " +(airCond - totalLiv -totalRoom1 -totalRoom2...) and so on. We will just have to see.

 /*The anonymous function might look something like this at the end...
 var totalAirConditioner = function(areaLiv, areaRoom1, areaRoom2, areaRoom3, areaBath1, areaBath2, areaGarage) {
  var totalArea = (totalLiv + totalRoom1 + totalRoom2 + totalRoom3 + totalBath1 + totalBath2 + totalGarage);
  return totalArea;
 }*/

// -------
 //Now repeat for each room in the home. If they come to a question regarding the amount of rooms-this could be where we place an anonymous function into the code-such as 'no', we can continue to the next set of questions such as a garage or Florida room. If they have neither, or they don't want to condition the air in the following rooms we will know how many air conditioners they need at the end. Time will tell if we can pull this off.
// -------

 //Now on to the other rooms of the home, for brevity lets assume this is a 3 bedroom, 2 bath with a Garage.

 alert("Now, lets move on the other rooms of the home\nLet's start with the bedroom.");

 //Make sure to validate the prompts with a while loop
 var room1Length=prompt("Let's start with the length of your Bedroom in feet?");
 while (room1Length==="" || isNaN(room1Length)) {
  room1Length = prompt("Please do not leave blank and only type in numbers.\nHow long is your Bedroom?");
 }
 //Find out what the length of the Bed room is in cubic feet.
 console.log("Your Bedroom is " + room1Length + " feet long.");

 //Validate with a while loop.
 var room1Width=prompt("Now, what is the width of your Bedroom?");
 while (room1Width==="" || isNaN(room1Width)){
  room1Width = prompt("Please do not leave blank and only type in numbers.\nHow wide is your Bedroom?");
 }
 //Now we have the width of the room in cubic feet.
 console.log("Your Bedroom is " +room1Width+ " feet wide.");

 //Validate with a while loop
 var room1Height=prompt("Finally, what is the height of your Bedroom?");
 while (room1Height==="" || isNaN(room1Height)) {
  room1Height = prompt("Please do not leave blank and only type in numbers.\nHow high is your Bedroom?");
 }
 //Finally we have the last integer to find the cubic feet of the Bed room.
 console.log("Your Bedroom is " + room1Height + " feet high.");

 //Set the Bedroom function call

 var totalRoom1 = calcRoom1 (room1Length, room1Width, room1Height);

 //now pass the arguments to the parameters below
 function calcRoom1 (l,w,h){
  areaRoom1 = l * w * h;
  return areaRoom1;
 }
 //the return, spits the information out to the totalRoom1 (the Bedroom)
 //notice how we are able to use the same variables within the code!

 //Now, print out the results of both the living room and Bedroom and see how much room you have.
 console.log("Your Bedroom has " +totalRoom1+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv -totalRoom1)+ " cubic feet of air left to cool the home.");

//----- Time for another room-------

 alert("Now, lets move on the other rooms of the home\nLet's move to the 2nd room.");

 //Make sure to validate the prompts with a while loop
 var room2Length=prompt("Let's start with the length of this room?");
 while (room2Length==="" || isNaN(room2Length)) {
  room2Length = prompt("Please do not leave blank and only type in numbers.\nHow long is your 2nd room?");
 }
 //Find out what the length of the Bed room is in cubic feet.
 console.log("Your 2nd room is " + room2Length + " feet long.");

 //Validate with a while loop.
 var room2Width=prompt("Now, what is the width of this room?");
 while (room2Width==="" || isNaN(room2Width)){
  room2Width = prompt("Please do not leave blank and only type in numbers.\nHow wide is your 2nd room?");
 }
 //Now we have the width of the room in cubic feet.
 console.log("Your 2nd room is " +room2Width+ " feet wide.");

 //Validate with a while loop
 var room2Height=prompt("Finally, what is the height of this room?");
 while (room2Height==="" || isNaN(room2Height)) {
  room2Height = prompt("Please do not leave blank and only type in numbers.\nHow high is your 2nd room?");
 }
 //Finally we have the last integer to find the cubic feet of this room
 console.log("Your 2nd room is " + room2Height + " feet high.");

 //Set the Bedroom function call

 var totalRoom2 = calcRoom2 (room2Length, room2Width, room2Height);

 //now pass the arguments to the parameters below
 function calcRoom2 (l,w,h){
  areaRoom2 = l * w * h;
  return areaRoom2;
 }
 //the return, spits the information out to the totalRoom2
 //notice how we are able to use the same variables within the code!

 //Now, print out the results and see how much room you have.
 console.log("Your 2nd room has " +totalRoom2+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv -totalRoom1 -totalRoom2)+ " cubic feet of air left to cool the home.");

 //-----Time for the last room------

 alert("Now, let's move to the last room.");

 //Make sure to validate the prompts with a while loop
 var room3Length=prompt("Let's start with the length of this room?");
 while (room3Length==="" || isNaN(room3Length)) {
  room3Length = prompt("Please do not leave blank and only type in numbers.\nHow long is your 3rd room?");
 }
 //Find out what the length of the Bed room is in cubic feet.
 console.log("Your 3rd room is " + room3Length + " feet long.");

 //Validate with a while loop.
 var room3Width=prompt("Now, what is the width of this room?");
 while (room3Width==="" || isNaN(room3Width)){
  room3Width = prompt("Please do not leave blank and only type in numbers.\nHow wide is your 3rd room?");
 }
 //Now we have the width of the room in cubic feet.
 console.log("Your 3rd room is " +room3Width+ " feet wide.");

 //Validate with a while loop
 var room3Height=prompt("Finally, what is the height of this room?");
 while (room3Height==="" || isNaN(room3Height)) {
  room3Height = prompt("Please do not leave blank and only type in numbers.\nHow high is your 3rd room?");
 }
 //Finally we have the last integer to find the cubic feet of this room
 console.log("Your 3rd room is " + room3Height + " feet high.");

 //Set the Bedroom function call

 var totalRoom3 = calcRoom3 (room3Length, room3Width, room3Height);

 //now pass the arguments to the parameters below
 function calcRoom3 (l,w,h){
  areaRoom3 = l * w * h;
  return areaRoom3;
 }
 //the return, spits the information out to the totalRoom3
 //notice how we are able to use the same variables within the code!

 //Now, print out the results and see how much room you have.
 console.log("Your 3rd room has " +totalRoom3+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv -totalRoom1 -totalRoom2 -totalRoom3)+ " cubic feet of air left to cool the home.");

 //-----Time for the first Bath room------

 alert("Now, let's move to the first bath room.");

 //Make sure to validate the prompts with a while loop
 var room4Length=prompt("Let's start with the length of the 1st bath?");
 while (room4Length==="" || isNaN(room4Length)) {
  room4Length = prompt("Please do not leave blank and only type in numbers.\nHow long is your 1st bath room?");
 }
 //Find out what the length of the bath room is in cubic feet.
 console.log("Your 1st bath room is " + room4Length + " feet long.");

 //Validate with a while loop.
 var room4Width=prompt("Now, what is the width of the 1st bath?");
 while (room4Width==="" || isNaN(room4Width)){
  room4Width = prompt("Please do not leave blank and only type in numbers.\nHow wide is your 1st bath room?");
 }
 //Now we have the width of the room in cubic feet.
 console.log("Your 1st bath room is " +room4Width+ " feet wide.");

 //Validate with a while loop
 var room4Height=prompt("Finally, what is the height of the 1st bath?");
 while (room4Height==="" || isNaN(room4Height)) {
  room4Height = prompt("Please do not leave blank and only type in numbers.\nHow high is your 1st bath room?");
 }
 //Finally we have the last integer to find the cubic feet of this room
 console.log("Your 1st bath room is " + room4Height + " feet high.");

 //Set the Bathroom function call

 var totalRoom4 = calcRoom4 (room4Length, room4Width, room4Height);

 //now pass the arguments to the parameters below
 function calcRoom4 (l,w,h){
  areaRoom4 = l * w * h;
  return areaRoom4;
 }
 //the return, spits the information out to the totalRoom4

 //Now, print out the results and see how much room you have.
 console.log("Your 1st bath room has " +totalRoom4+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv -totalRoom1 -totalRoom2 -totalRoom3 - totalRoom4)+ " cubic feet of air left to cool the home.");

 //-----Time for the other Bath room------

 alert("Now, let's move to the other bath room.");

 //Make sure to validate the prompts with a while loop
 var room5Length=prompt("Let's start with the length of the other bath?");
 while (room5Length==="" || isNaN(room5Length)) {
  room5Length = prompt("Please do not leave blank and only type in numbers.\nHow long is your other bath room?");
 }
 //Find out what the length of the bath room is in cubic feet.
 console.log("Your other bath room is " + room5Length + " feet long.");

 //Validate with a while loop.
 var room5Width=prompt("Now, what is the width of the other bath?");
 while (room5Width==="" || isNaN(room5Width)){
  room5Width = prompt("Please do not leave blank and only type in numbers.\nHow wide is your other bath room?");
 }
 //Now we have the width of the room in cubic feet.
 console.log("Your other bath room is " +room5Width+ " feet wide.");

 //Validate with a while loop
 var room5Height=prompt("Finally, what is the height of the other bath?");
 while (room5Height==="" || isNaN(room5Height)) {
  room5Height = prompt("Please do not leave blank and only type in numbers.\nHow high is your other bath room?");
 }
 //Finally we have the last integer to find the cubic feet of this room
 console.log("Your other bath room is " + room5Height + " feet high.");

 //Set the other Bathroom function call

 var totalRoom5 = calcRoom5 (room5Length, room5Width, room5Height);

 //now pass the arguments to the parameters below
 function calcRoom5 (l,w,h){
  areaRoom5 = l * w * h;
  return areaRoom5;
 }
 //the return, spits the information out to the totalRoom5

 //Now, print out the results and see how much room you have.
 console.log("Your other bath room has " +totalRoom5+ " cubic feet of air to cool in this room.");
 console.log("You have " +(airCond - totalLiv -totalRoom1 -totalRoom2 -totalRoom3 - totalRoom4 -totalRoom5)+ " cubic feet of air left to cool the home.");

 //-----Time for the Garage------

 var garage=prompt("Do you want to cool your Garage?\nyes or no.\nAny answer that is not 'yes' or 'no' in lower case will produce a value of 'no'");
 if(garage === "yes"){
  var coolGarage = 900;//this is the cubic feet of the garage(10x10x9)
  console.log("You will need another " +coolGarage+ " cubic feet to cool the Garage.")
 }else {
  var noGarage = 0;
  console.log("You do not want to cool your Garage.");

  //Now, print out to see how the Garage effects the outcome

  console.log("Your Garage has " + (coolGarage || noGarage) + " of additional cubic feet of air to cool.");
  console.log("You have " + (airCond - totalLiv - totalRoom1 - totalRoom2 - totalRoom3 - totalRoom4 - totalRoom5 - (coolGarage || noGarage) + " cubic feet of air left to cool the home."));
 }

 //Now time for closure or the anonymous function
 //First we must define the function, then we can call it. Not the other way around.

var airCondArea = function(totalLiv, totalRoom1, totalRoom2, totalRoom3, totalRoom4, totalRoom5, coolGarage ){
  if(airCondArea <= 2500){
  console.log("You don't need another air conditioner. The one you have is fine.");
 }else{
  console.log("You need another air conditioner. You'll thank me later this summer.");
 }

