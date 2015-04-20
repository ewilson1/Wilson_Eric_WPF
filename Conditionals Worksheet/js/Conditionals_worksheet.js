
 /*
Eric Wilson
SDI Section 01
Conditionals Worksheet
April 20th, 2015
 */

/*alert("Test to see if they are connected");
 console.log("Test to see if they are connected");
    example:
 --
 // if the child is under 10 they get green eggs and ham, otherwise they get The Time Machine
 var age = 6;
 var book;

 /* if(age <10){
 book = "Green Eggs and Ham";
 }else{
 book = "The Time Machine";
 }

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
 console.log(book)

 //To get into the Pie eating contest you must weigh 250 pds or more. Determine if they qualify based on weight.

/*var weight = 252;
 var eat;

 /*if(weight >= 250){
  eat = "Gets to enter the pie eating contest, good luck!";
 }else{
  eat = "Does not get to eat in the contest";
 }
console.log(eat)*/

 // Driver must determine if they can make it across the desert with their current level of fuel.
 // The next gas station is 200 miles away. Should they fill up, or can they make it across?
 // Print: "Yes, you can make it without stopping for gas! or "You only have X gallons of gas in your tank, better get gas now while you still can!"

 var mpg = 15; //this is miles per gallon
 var tankGallons = 20;//this is how many gallons the tank will hold
 var gauge = (75 * .01) * (mpg * tankGallons); //this is how many miles they can go now
 var trip

 /*if(gauge >= 200 ){
  trip = "Yes, you can make it " + gauge + " miles without stopping for gas!"
 }else{
  trip = "You only have " + gauge + " miles left in your tank, better get gas now while you still can!";
 }
 console.log(trip);*/

trip = (gauge >= 200) ? "Yes, you can make it " + gauge + " miles without stopping for gas!" : "You only have " + gauge + " miles left in your tank, better get gas now while you still can!";
 console.log (trip)