
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

--------

 //Circumference = 2 * pie * radius, so to find the circumference we need to apply C = 2 * pie * r. When we know the radius and we know the value for pie, the function needs to solve for

 var total = calcCircumference(25, 3.14);//function call or invoking the function with the arguments 15 for the radius and pie (3.14)

 function calcCircumference(r, p){//we have passed the information from the arguments to the parameters
  var circumference = 2 * p * r;//even though pie is known as 3.14, we still had to add it to the arguments, notice the arrangement of the variables in the equation for circumference did not matter.
  return circumference;//this spits the information out to the var "total" in the function call
 }

 console.log("The circumference of the circle is " + total.toFixed(2) + " inches.");//to see if we have done this right and to round to the nearest two places past the decimal.

 --------

  */


 //Stung!

 //It takes 8.67 bee stings per pound to kill an animal. Calculate how many stings are needed to kill an animal of a certain weight in pounds.



 function killAnimal(s, p){//This is setting up the parameters s for sting and p for pounds.
  var stings = s
  var pounds = p
  var kill = s * p;
  return kill;//this spits the information out the the var total in the function call
 }

 var total = killAnimal(8.67, 244);//this is the function call or invoking from the arguments to the parameters. Now set up the parameters in the function killAnimal
 //This time I moved the call or invocation from before to after the parameters were set in place.
 //It still worked. So, Functions don't care if the invocation is before or after-that only matter with anonymous functions.

 console.log("It takes " +total.toFixed(2)+ " bee stings to kill this animal.");//Now play around with the weight and double check with a calculator to see if this is true.\
 //It works out to be true.