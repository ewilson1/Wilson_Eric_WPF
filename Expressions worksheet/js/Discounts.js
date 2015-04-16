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
console.log(shoes);

// How much did they cost?
var cost = prompt("How much did your "+shoes+ " cost?");
console.log("The " +shoes+ " are " +cost+ " dollars.");

// Let them know about a discount of 10%
alert("Did you know you can get 10% off for your " +shoes+ "?");

// Let them know the new cost of their shoes with the discount
var discount = (cost - (cost *.10));
alert("The new price for your " +shoes+ " is $" +discount+ ", before taxes.");

// console.log the answer to check the new discounted price of their shoes
console.log("The new price for your " +shoes+ " is $" +discount+ ", before taxes.");

// now let's let them know about the taxes
alert("Before we get carried away, there is still taxes to pay. Hit ok if you want to know what the tax.");