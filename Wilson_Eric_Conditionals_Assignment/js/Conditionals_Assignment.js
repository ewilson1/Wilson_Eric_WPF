
 /*
Eric Wilson
SDI Section 01
Conditionals Assignment
April 23rd, 2015

 

alert("test to see if connected.")//They are connected

*/

 //We are going to see how much it costs per square foot to buy a home, with some added features and some without.

//first of all, how long is the home?
 var length=prompt("Welcome! What is the length of your home in feet?");
  console.log("Your home is " + length + " feet long.");
//then, how wide is it?
 var width=prompt("Now, what is the width of your home in feet?");
  console.log("Your home is " + width + " feet wide.");
//now calculate the area of the home.
 var area = length * width;
 alert("Your home is " + area + " square feet");
 console.log("Your home is " + area + " square feet");

//Time to add some features, such as a lake view or a golf view.

 //then step through it with each luxury item

 var lake=prompt("Does your home have a Lakeside view?\nyes or no.");
 if(lake === "yes"){
  var lakePrice = 25000;
  console.log("Add $" +lakePrice+ " dollars to the value of your home.")
 }else{
  var noLakeView = 0;
  console.log("Does not have Lakeside view.")
 }

//same thing here, just find out how much they paid in extras for the home. This will come up later in the code.

 var golf=prompt("Does your home have a golf course you can see from your property?\nyes or no.");
 if(golf === "yes"){
  var golfPrice = 50000;
  console.log("Add $" +golfPrice+ " dollars to the value of your home.")
 }else{
  var noGolfView = 0;
  console.log("Does not have a golf course view.")
 }

//This was the most complicated part of the assignment; finding which of the four values the user chose and apply that to the cost of the home. There were four parts 1)They had both views, 2)They had a lake view, but not a golf view, 3) They had a golf view, but not a lake view, and 4)They had neither of them. Getting the machine to get it right took some trial and error-and a lot of patience!!!

 //This part is important as the computer is not using comma's or decimals at this point in time, so everything had to be done straight across. A number such as 300000 would mean $300,000.00 for instance.
 var homePrice=prompt("How much did you pay for your home?\nImportant! Do not use comma's or decimals.");
 console.log("Your home cost $" +homePrice+ " dollars");

//This (below) worked! This combination parsed what the user chose and applied it to the term "luxuryItems". FUN!!!! This is where we chose between four (4) different possibilities as mentioned above.
 var luxuryItems = ((lakePrice || noLakeView)+(golfPrice || noGolfView));
  console.log("Your home has $" + luxuryItems + " dollars in luxury items.");

//This (below) was a trip back to the start of this class; making sure we are adding numbers for a total cost.
 var homeCost = parseInt(homePrice) + parseInt(luxuryItems);
 console.log("Your home is now $" +homeCost+ " dollars.");

 //Now, let's find out how much they paid for everything per square feet; and then run some other numbers to check it.

 var homeFeet = parseInt(homeCost)/(area);
 console.log("You paid $" +homeFeet+ " dollars per square foot")