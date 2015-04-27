
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

 //Circumference = 2 * pie * radius, so to find the circumference we need to apply C = 2 * pie * r. When we know the radius and we know the value for pie, the function needs to solve for

 var total = calcCircumference(25, 3.14);//function call or invoking the function with the arguments 15 for the radius and pie (3.14)

 function calcCircumference(r, p){//we have passed the information from the arguments to the parameters
  var circumference = 2 * p * r;//even though pie is known as 3.14, we still had to add it to the arguments, notice the arrangement of the variables in the equation for circumference did not matter.
  return circumference;//this spits the information out to the var "total" in the function call
 }

 console.log("The circumference of the circle is " + total.toFixed(2) + " inches.");//to see if we have done this right and to round to the nearest two places past the decimal.