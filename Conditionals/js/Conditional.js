
 /*
Eric Wilson
SDI Section 01
Title
Date
 */
 
//Conditional Logic -else if, choosing between three or more blocks of code

//alert("Test to see if they are connected");
//console.log("Test to see if they are connected");

var kidHeight = 46; //Normally the kid would not be tall enough, but with sneakers which add 2" he is.
 var minHeight = 48;
var wParentHeight = 45; // the height of the kid with the parent

//if the child is old enough, print to the console "you can ride"
//if the kid is over 48 inches in height


if(kidHeight > minHeight){
 //print out you can ride
   console.log ("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
 //you can ride with a parent
 console.log ("You can ride, but only with a parent present.");
}else{
  //print out "sorry you have some growing to do"
 console.log ("Sorry kid, you have some growing to do");
 }





