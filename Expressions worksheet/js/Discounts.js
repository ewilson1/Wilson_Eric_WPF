/*
Eric Wilson
SDI Section 01
Discounts
April 16, 2015
 */

//alert("Test to see if connected");


//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. There will be a result, more than likely, that's a floating number with decimals

//Given Original price of item, the discount, the description of the item and the sales tax percentage.

// Price of the item
var shoes = prompt("Let's get you some shoes. \nWhat kind of shoes would you like?");
// Then lets store it in the console
console.log("They like " +shoes+ ".");

// How much did they cost?
var cost = prompt("How much did your "+shoes+ " cost?");
console.log("The " +shoes+ " are $" +cost+ " dollars.");

// Let them know about a discount of 10%
alert("Did you know you can get 10% off for your " +shoes+ "?");

// Let them know the new cost of their shoes with the discount
var discount = (cost - (cost *.10));
alert("The new price for your " +shoes+ " is $" +discount+ ", before taxes.");

// console.log the answer to check the new discounted price of their shoes
console.log("The new price for your " +shoes+ " is $" +discount+ ", before taxes.");

// now let's let them know about the taxes
var ok = prompt("Before we get carried away, there is still taxes to pay.\nType yes and hit 'OK' if you want to know the tax in this county.");

// show them the taxes which will be applied, and then store in the console
var taxes = (.05);
alert("The tax in the county is " +parseInt(5)+ " percent");
console.log("The tax in the county is " +parseInt(5)+ " percent");

//Show them the tax to be added to the discounted price, and then add to the console
var taxTotal = (discount * taxes);
alert(("The amount of your tax to be added to your discount is $" +taxTotal+ "."));
console.log("The amount of your tax to be added to your discount is $" +taxTotal+ ".");

//Now show them the final price
var Total = (taxTotal) + (discount);
alert("The new price for your " +shoes+ " is $ " +Total+ " dollars");
console.log("The new price for your " +shoes+ " is $" +Total+ " dollars");

var print = ("Your " +shoes+ " were originally $" +cost+ ", but after a 10% discount it is now " +discount+ "without tax, and " +Total+ "with tax.");
alert(print)
console.log("Your " +shoes+ " were originally $" +cost+ ", but after a 10% discount it is now " +discount+ "without tax, and " +Total+ "with tax.");

