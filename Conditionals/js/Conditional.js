
 /*
Eric Wilson
SDI Section 01
Title
Date
 */
 
//Conditional Logic - Logical Operators

var budget = 300;
 var iPhone = 199.99;
 var payCheck = 200;


 //if the price of the phone is less than our budget AND if our paycheck is over 300
 //we can only use && when comparing Boolean True or False statements YOU CANT use just numbers between && operator
 if(iPhone < budget && payCheck > 300){
  console.log("We can buy the phone!");
 }else{
  console.log("No phone for you!");
 }