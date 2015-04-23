
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

//Time to add some features, such as a lake view. If they have one, it will add to the overall cost per square foot of the home.
 //first we must add value to our new variables and declare them true

 var lakePrice = 25000 && "yes";
 var golfPrice = 50000 && "yes";

 //then step through it with each luxury item

 var lake=prompt("Does your home have a Lakeside view?\nYes or No.");
 if(lake === "yes"){
  lakePrice = 25000;
  console.log("Add $25,000 dollars to the value of your home.")
 }else{
  console.log("Does not have Lakeside view.")
 }

//same thing here, if they have a view of the golf course from thier home or not; as it will also add to the value of the home.

 var golf=prompt("Does your home have a golf course you can see from your property?\n Yes or No.");
 if(golf === "yes"){
  golfPrice = 50000;
  console.log("Add $50,000 dollars to the value of your home.")
 }else{
  console.log("Does not have a golf course view.")
 }

//I took out the complicated yes or no for lake and golf, took up way too much code and didn't run properly


 //var homePrice=prompt("How much did you pay for your home?")