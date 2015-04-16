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
console.log(cost);

// Let them know about a discount of 10%
alert("Did you know there is a 10% discount for your " +shoes+ "?");