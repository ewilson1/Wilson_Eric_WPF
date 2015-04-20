
 /*
Eric Wilson
SDI Section 01
Title
Date
 */
 
//Conditional Logic - Ternary Operators

 var gpa = 2.3;

//if the gpa is over the min 2.0 score, the student can graduate
/*if( gpa > 2.0){
 console.log("You can graduate!");
}else{
 console.log("GPA is too low!");
}*/
//using the ternary operator you need to incorporate the ? and the : to compare between the two values
 /*(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");*/

 var age = 6;
 var book;

 // if the child is under 10 they get green eggs and ham, otherwise they get The Time Machine

 /* if(age <10){
  book = "Green Eggs and Ham";
 }else{
  book = "The Time Machine";
 }*/

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
 console.log(book)
