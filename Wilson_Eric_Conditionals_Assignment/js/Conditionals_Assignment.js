
 /*
Eric Wilson
SDI Section 01
Conditionals Assignment
April 23rd, 2015

 

alert("test to see if connected.")//They are connected

*/

 //We are going to see how much it costs per square foot to buy a home, with some added features and some without.

//first of all, how long is the home?
 var length=prompt("Welcome! What is the length of your home in feet?");
  console.log("Your home is " + length + " feet long.");
//then, how wide is it?
 var width=prompt("Now, what is the width of your home in feet?");
  console.log("Your home is " + width + " feet wide.");
//now calculate the area of the home.
 var area = length * width;
 alert("Your home is " + area + " square feet");
 console.log("Your home is " + area + " square feet");

//Time to add some features, such as a lake view or a golf view.

 //then step through it with each luxury item

 var lake=prompt("Does your home have a Lakeside view?\nyes or no.");
 if(lake === "yes"){
  var lakePrice = 25000;
  console.log("Add $25,000 dollars to the value of your home.")
 }else{
  var noLakeView = 0;
  console.log("Does not have Lakeside view.")
 }

//same thing here, just find out how much they paid in extras for the home. This will come up later in the code.

 var golf=prompt("Does your home have a golf course you can see from your property?\nyes or no.");
 if(golf === "yes"){
  var golfPrice = 50000;
  console.log("Add $50,000 dollars to the value of your home.")
 }else{
  var noGolfView = 0;
  console.log("Does not have a golf course view.")
 }

//I took out the complicated yes or no for lake and golf, took up way too much code and didn't run properly
 //time to move on, if we need to know if they have one or the other we can come back to it later.
 //we are simply trying to find out how much they paid per square foot of their home, not if they are going to buy it or not-which in that case we would need to know how much they were going to pay.

 var homePrice=prompt("How much did you pay for your home?");
 console.log("Your home cost $" +homePrice+ " dollars");

 var luxuryItems= (lakePrice || noLakeView) || (golfPrice || noGolfView);
  console.log("Your home has $" + luxuryItems + " dollars in luxury items.");