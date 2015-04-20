
 /*
Eric Wilson
SDI Section 01
Title
Date
 */
 
//Conditional Logic - Logical Operators

var budget = 100;
 var iPhone = 199.99;
 var payCheck = 200;
 var wonLottery = true;


 //if the price of the phone is less than our budget OR if we won the Lottery
 //we can only use && when comparing Boolean True or False statements YOU CANT use just numbers between && operator
 //the or operator || only needs ONE of the Boolean values to be true to run the code, unlike the && operator needed both Boolean values needed to be true.
 if(iPhone < budget || wonLottery){
  console.log("We can buy the phone!");
 }else{
  console.log("No phone for you!");
 }