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

//Since everyone has at least a Living Room and a Bedroom with at least one bath, we might need to enter some code that allows us to skip to the next 'set' of questions regarding rooms. I have written this out for a 3 bedroom and 2 bath home with a living room. Not everyone has that, so my goal is to work something in here to allow us to jump. Time will tell. Let's build the backbone first, and include the Anonymous function at the end or 'closure' to the code.

 alert("Welcome to Florida, it gets steamy here!\nLet's find out how many air conditioners you need to cool your home.\n-----\nTake notice: each air conditioner can effectively cool 2,500 cubic feet per house.");
//Set up the total value for each air conditioner as a variable for the main code. The main code is saved for after we have all three variables from the user's input.

//Let's start with a fictitious number that we can deal with regarding cooling a home. I know BTU's are measured differently when cooling a home; but that is not the purpose of this code. I have friends who need two air conditioners because they have an upstairs with extra rooms in it. I always wanted to know if I added another air conditioner if that would be overkill. Hopefully this code answers that.

//Lets say the air conditioner can cool up to 2500 cubic feet, for a starting point.

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

 //Now, print out the results.
 console.log("Your living room has " +totalLiv+ " cubic feet of air to cool in this room.");

// -------
 //Now repeat for each room in the home. If they come to a question regarding the amount of rooms-this could be where we place an anonymous function into the code-such as 'no'. Time will tell. Let's finish building the backbone before we try skipping code.
// -------

 //Now on to the other rooms of the home, for completeness lets assume this is a 3 bedroom and 2 baths. Again, if they have less (and if I have managed my time) we can work on that later.

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

 //Now, print out the results.
 console.log("Your Bedroom has " +totalRoom1+ " cubic feet of air to cool in this room.");

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

 //Now, print out the results.
 console.log("Your 3rd room has " +totalRoom3+ " cubic feet of air to cool in this room.");


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

 //Now, print out the results.
 console.log("Your 1st bath room has " +totalRoom4+ " cubic feet of air to cool in this room.");


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

//Now, print out the results.
console.log("Your 2nd bath room has " +totalRoom5+ " cubic feet of air to cool in this room.");

 //Set the other Bathroom function call

 var totalRoom5 = calcRoom5 (room5Length, room5Width, room5Height);

 //now pass the arguments to the parameters below
 function calcRoom5 (l,w,h){
  areaRoom5 = l * w * h;
  return areaRoom5;
 }
 //the return, spits the information out to the totalRoom5


//--------
 //Now time for closure or the anonymous function
 //First we must define the function, then we can call it. Not the other way around.

var airCondArea = function(totalLiv, totalRoom1, totalRoom2, totalRoom3, totalRoom4, totalRoom5){
 var acArea = totalLiv + totalRoom1 + totalRoom2 + totalRoom3 + totalRoom4 + totalRoom5;
 return acArea
};
//now call the function

var a = airCondArea(totalLiv, totalRoom1, totalRoom2, totalRoom3, totalRoom4, totalRoom5);//invoking all the rooms

console.log("All the rooms add up to " +a+ " cubic feet.");//logging all the rooms

//Now let's see if you need another air conditioner.
//we will need to run a ternary to find the answer.

var acNeed = (parseInt(a));
(acNeed <= 2500) ? console.log("You have what you need. Enjoy Florida!") : console.log("You will need another air conditioner; you will thank me later");


//-----Comments and test values-----//

//The first go round had some nice size rooms, but it was still enough to be handled by one air conditioner.
    //You can cool up to 2,500 cubic feet of air with one air conditioner.
    //Your living room is 10 feet long.
    //Your living room is 10 feet wide.
    //Your living room is 9 feet high.
    //Your living room is 900 cubic feet of air to cool in this room.
    //You have 1600 cubic feet of air left to cool the home.
    //Your Bedroom is 6 feet long.
    //Your Bedroom is 6 feet wide.
    //Your Bedroom is 9 feet high.
    //Your Bedroom has 324 cubic feet of air to cool in this room.
    //You have 1276 cubic feet of air left to cool the home.
    //Your 2nd room is 7 feet long.
    //Your 2nd room is 7 feet wide.
    //Your 2nd room is 9 feet high.
    //Your 2nd room has 441 cubic feet of air to cool in this room.
    //You have 835 cubic feet of air left to cool the home.
    //Your 3rd room is 6 feet long.
    //Your 3rd room is 6 feet wide.
    //Your 3rd room is 9 feet high.
    //Your 3rd room has 324 cubic feet of air to cool in this room.
    //You have 511 cubic feet of air left to cool the home.
    //Your 1st bath room is 5 feet long.
    //Your 1st bath room is 4 feet wide.
    //Your 1st bath room is 9 feet high.
    //Your 1st bath room has 180 cubic feet of air to cool in this room.
    //You have 331 cubic feet of air left to cool the home.
    //Your other bath room is 5 feet long.
    //Your other bath room is 4 feet wide.
    //Your other bath room is 9 feet high.
    //Your other bath room has 180 cubic feet of air to cool in this room.
    //You have 151 cubic feet of air left to cool the home.
    //All the rooms add up to 2349 cubic feet.
    //You have what you need. Enjoy Florida!

//Now lets use a big House...with big rooms and make sure we get the right suggestion at the end.

//You can cool up to 2,500 cubic feet of air with one air conditioner.
//Your living room is 12 feet long.
//Your living room is 12 feet wide.
//Your living room is 12 feet high.
//Your living room has 1728 cubic feet of air to cool in this room.
//You have 772 cubic feet of air left to cool the Living Room.
//Your Bedroom is 7 feet long.
//Your Bedroom is 7 feet wide.
//Your Bedroom is 9 feet high.
//Your Bedroom has 441 cubic feet of air to cool in this room.
//You have 331 cubic feet of air left to cool the home.
//Your 2nd room is 7 feet long.
//Your 2nd room is 7 feet wide.
//Your 2nd room is 9 feet high.
//Your 2nd room has 441 cubic feet of air to cool in this room.
//You have -110 cubic feet of air left to cool the home.-I don't like negative results...they don't mean anything
//Your 3rd room is 5 feet long.
//Your 3rd room is 5 feet wide.
//Your 3rd room is 7 feet high.
//Your 3rd room has 175 cubic feet of air to cool in this room.
//You have -285 cubic feet of air left to cool the home.-I don't like negative results...they don't mean anything
//Your 1st bath room is 5 feet long.
//Your 1st bath room is 7 feet high.
//Your 1st bath room has 140 cubic feet of air to cool in this room.
//You have -425 cubic feet of air left to cool the home.-I don't like negative results...they don't mean anything
//Your other bath room is 5 feet long.
//Your other bath room is 4 feet wide.
//Your other bath room is 7 feet high.
//Your other bath room has 140 cubic feet of air to cool in this room.
//You have -565 cubic feet of air left to cool the home.-I don't like negative results...they don't mean anything
//All the rooms add up to 3065 cubic feet.
//You will need another air conditioner; you will thank me later

//SO this last go round had a Huge house, and produced the result I wanted (another air conditioner). Going to work on getting the negative numbers make more sense. Ternary?!