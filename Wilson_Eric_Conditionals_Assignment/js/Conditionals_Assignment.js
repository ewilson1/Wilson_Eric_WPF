
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
 if(length==="" || isNaN(length)){
  length = prompt("Please do not leave blank and only type in numbers.\nWhat is the length of your home?");
 }
  console.log("Your home is " + length + " feet long.");
//then, how wide is it?
 var width=prompt("Now, what is the width of your home in feet?");
 if(width==="" || isNaN(width)){
  width = prompt("Please do not leave blank and only type in numbers\nWhat is the width of your home?");
 }
  console.log("Your home is " + width + " feet wide.");
//now calculate the area of the home.
 var area = length * width;
 alert("Your home is " + area + " square feet");
 console.log("Your home is " + area + " square feet");

//Time to add some features, such as a lake view or a golf view.

 //then step through it with each luxury item

 var lake=prompt("Does your home have a Lakeside view?\nyes or no.\nAny answer that is not 'yes' or 'no' in lower case will produce a value of 'no'");
 if(lake === "yes"){
  var lakePrice = 25000;
  console.log("Add $" +lakePrice+ " dollars to the value of your home.")
 }else{
  var noLakeView = 0;
  console.log("Does not have Lakeside view.")
 }

//same thing here, just find out how much they paid in extras for the home. This will come up later in the code.

 var golf=prompt("Does your home have a golf course you can see from your property?\nyes or no.\nAny answer that is not 'yes' or 'no' in lower case will produce a value of 'no'");
 if(golf === "yes"){
  var golfPrice = 50000;
  console.log("Add $" +golfPrice+ " dollars to the value of your home.")
 }else{
  var noGolfView = 0;
  console.log("Does not have a golf course view.")
 }

//This was the most complicated part of the assignment; finding which of the four values the user chose and apply that to the cost of the home. There were four parts 1)They had both views, 2)They had a lake view, but not a golf view, 3) They had a golf view, but not a lake view, and 4)They had neither of them. Getting the machine to get it right took some trial and error-and a lot of patience!!!

 //This part is important as the computer is not using comma's or decimals at this point in time, so everything had to be done straight across. A number such as 300000 would mean $300,000.00 for instance.
 var homePrice=prompt("How much did you pay for your home?\nImportant!\nDo not use comma's or decimals\nExample $300,000 would be written 300000.");
 console.log("Your home cost $" +homePrice+ " dollars");

//This (below) worked! This combination parsed what the user chose and applied it to the term "luxuryItems". FUN!!!! This is where we chose between four (4) different possibilities as mentioned above.
 var luxuryItems = ((lakePrice || noLakeView)+(golfPrice || noGolfView));
  console.log("Your home has $" + luxuryItems + " dollars in luxury items.");

//This (below) was a trip back to the start of this class; making sure we are adding numbers for a total cost.
 var homeCost = parseInt(homePrice) + parseInt(luxuryItems);
 console.log("Your home is now $" +homeCost+ " dollars.");

 //Now, let's find out how much they paid for everything per square feet; and then run some other numbers to check it.

 var homeFeet = parseInt(homeCost)/(area);
 console.log("You paid $" +homeFeet.toFixed(2)+ " dollars per square foot");

 //In the first try I got a number with 14 places past the decimal point. Working on rounding that one out.
 //This is what I entered the first time, and everything worked just fine. Remember, I have four variables that needed to be parsed and I chose to use "yes" for the lake and golf questions for this round. This is my result.
 //Your home is 60 feet long.
 //Your home is 30 feet wide.
 //Your home is 1800 square feet
 //Add $25000 dollars to the value of your home.-Yes for the lake view
 //Add $50000 dollars to the value of your home.-Yes for the golf view
 //Your home cost $300000 dollars
 //Your home has $75000 dollars in luxury items.
 //Your home is now $375000 dollars.
 //You paid $208.33333333333334 dollars per square foot

 //The goal here is to find out what they paid in square feet for their home, and show how luxury items can add to the overall value of the home. Here is what you can expect to pay per square foot when I have a lake view, but not a golf view.

 //Your home is 60 feet long.
//Your home is 30 feet wide.
//Your home is 1800 square feet
//Add $25000 dollars to the value of your home.-Yes to the lake view
//Does not have a golf course view.-No for the golf view
//Your home cost $300000 dollars
//Your home has $25000 dollars in luxury items.
//Your home is now $325000 dollars.
//You paid $180.55555555555554 dollars per square foot

 //There is a difference of $27.78 to have a lake view but not a golf view. Now lets switch it around. A golf view, but not a lake view.

//Your home is 60 feet long.
//Your home is 30 feet wide.
//Your home is 1800 square feet
//Does not have Lakeside view.-NO to the lake view
//Add $50000 dollars to the value of your home.-Yes to the golf view
//Your home cost $300000 dollars
//Your home has $50000 dollars in luxury items.
//Your home is now $350000 dollars.
//You paid $194.44444444444446 dollars per square foot

 //This time you paid more to have a golf view than a lake view. Each of the aforementioned used the same house (1800 square feet. Let's see what happens when we change those numbers around a bit. My guess, the larger the home for the same price will bring down the price per square foot.

 //Now I changed the size of the home, but kept the price the same and added both features (lake and golf) and still came up with a smaller number per square foot.
 //Your home is 80 feet long.-Changed the length
//Your home is 60 feet wide.-Changed the width
//Your home is 4800 square feet-HUGE HOUSE!!!
//Add $25000 dollars to the value of your home.
//Add $50000 dollars to the value of your home.
//Your home cost $300000 dollars-same price...
//Your home has $75000 dollars in luxury items.
//Your home is now $375000 dollars.
//You paid $78.125 dollars per square foot-Now that's cheap for what you are getting.

 //Just look at the value you get for such a big house for the same price! Only $78.13 per square foot.
