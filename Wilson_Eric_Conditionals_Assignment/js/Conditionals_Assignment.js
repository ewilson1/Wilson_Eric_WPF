
 /*
Eric Wilson
SDI Section 01
Conditionals Assignment
April 23rd, 2015

 

alert("test to see if connected.")//They are connected

*/

 //We are going to see how much it costs per square foot to buy a home, with some added features and some without.


 var length=prompt("Welcome! What is the length of your home in feet?");
  console.log("Your home is " + length + " feet long.");

 var width=prompt("Now, what is the width of your home in feet?");
  console.log("Your home is " + width + " feet wide.");

 var area = length * width;
 alert("Your home is " + area + " square feet");
 console.log("Your home is " + area + " square feet");

 var lake=prompt("Does your home have a Lakeside view?\nYes or No.");
 if(lake === "yes"){
  console.log("Add $25,000 dollars to the value of your home.")
 }else{
  console.log("Does not have Lakeside view.")
 }
 var lakePrice = 25000;

 var golf=prompt("Does your home have a golf course you can see from your property?\n Yes or No.");
 if(golf === "yes"){
  console.log("Add $50,000 dollars to the value of your home.")
 }else{
  console.log("Does not have a golf course view.")
 }
 var golfPrice = 50000;


 //var homePrice=prompt("How much did you pay for your home?")