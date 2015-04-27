
 /*
Eric Wilson
SDI Section 01
Title
Date

 


alert("test to see if they are connected.");
 console.log("Test to see if they are connected");


//They are connected

//Here is an example that actually works. The example from the instructions don't.

//You can have the function before or after the declared variable "Total = calcArea"

 //Arguments and Parameters

 //
 function calcArea(w, h){//function functionName--in this case calcArea---(argument 1, argument 2)--in this case w, and h
  var area = w * h;//passes the arguments, w and h,  (variables or givens) to the parameters
 return area//Returns information to the function call---in this case var total
 }
 var total = calcArea(30, 20);//function call
 console.log(total);//print out the result to the console to see if it's working.
  */

 //Circumference

 var total = calcCircumference(15, 3.14);//function call

 function calcCircumference(r, p){//
  var circum = 2 * p * r;
  return circum;
 }

 console.log("The circumference of the circle is " + total + ".");