
 /*
Eric Wilson
SDI Section 01
Conditionals Worksheet
April 20th, 2015
 */

/*alert("Test to see if they are connected");
 console.log("Test to see if they are connected");
    */

 //To get into the Pie eating contest you must weigh 250 pds or more. Determine if they qualify based on weight.

var weight = 252;
 var eat;

 /* if(age <10){
  book = "Green Eggs and Ham";
  }else{
  book = "The Time Machine";
  }*/

 if(weight <= 250){
  eat = "Gets to enter the pie eating contest, good luck!";
 }else{
  eat = "Does not get to eat in the contest";
 }
console.log(eat)
