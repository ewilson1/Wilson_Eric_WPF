
 /*
Eric Wilson
SDI Section 01
Conditionals Worksheet
April 20th, 2015
 */

 // Make sure the user has the correct name and password. Only one error message should appear

 var correctUser = "Eric";
 var correctPass = "Aidan";
 var welcome = (correctUser && correctPass);

 var userInput = prompt("Welcome to our website.\nPlease enter your username.");
 var userPassWord = prompt("Please enter your password");
 if(userInput != correctUser) {
   console.log("User name not found. Please try again.");
  }else if(userPassWord != correctPass){
  console.log("Your password does not match our records.");
  }else{
  welcome = true;
  console.log("Welcome, " + correctUser + "!");
  }



