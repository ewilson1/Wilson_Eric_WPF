/*
 Eric Wilson
 SDI Section 01
 Expressions Assignment
 April 16, 2015
 */

//alert("test to see if connected");

//Brainstorm an idea for a calculator of some kind. Must use an array, 3 prompts for information from the user and use math expressions, et al.

//Givens: (what we will ask the user for) Let's Grill! 1. What do they like to eat, steak or chicken?, 2. How long does it take to cook their food?, 3. How many times a month do they grill?, 4. How much did they pay for a tank of fuel?, 5. Time to draw conclusions such as a). How many steaks or chickens can they eat before the tank runs out? and b). How much does it cost to grill each time?.

//Let's ask them what they like to grill.
var food = prompt("Let's Grill!\nDo you like Chicken or Steak on the grill?");
console.log("They like " +food+ " on the grill");

//Now let's ask them how long it takes to cook their food
var time = prompt("How long does it take to cook your " +food+ " in minutes?");
console.log("It takes them " +time+ " minutes to cook their " +food+ ".");

//Now let's find out how many times they grill a month
var month = prompt("How many times do you grill your " +food+ " in a month?");
console.log("They grill their " +food+ " around " +month+ " times a month.");

//Now let's ask how much they pay to have a full tank of fuel
var tank = prompt("How much did it cost you to fill up your tank?");
console.log("It cost them $" +tank+ " dollars to fill up their tank.");

//Time to let them know how many minutes of grilling time they have per unit of fuel
alert("Each tank holds around 240 minutes of grilling time, so keep that in mind.");
console.log("Now they are aware of how much time they have in each tank of fuel, 240 minutes.");

//We have enough information to draw a conclusion as to how many times they can grill before the tank runs out
var grillTime = (Number(240) / time);
alert("You can grill " +grillTime+ " " +food+ "'s until the tank runs out.");
console.log("They can grill " +grillTime+ " " +food+ "'s until the tank runs out.");

//How much did it cost to cook the food each time?
var cost=(tank / grillTime);
alert("The cost of grilling a " +food+ " is $" +cost+ " dollars each time you grill.");
console.log("The cost of grilling a " +food+ " is $" +cost+ " dollars each time they grill.");

//How many tanks will they go through in a year?
var year=(month * 12);
var tankYear=(year / grillTime);
alert("You will go through " +tankYear+ " tank's a year");
console.log("They will go through " +tankYear+ " tanks a year");

//So, in conclusion...
var overall=(tank * tankYear);
alert("So it boils down to this...\nGet ready to buy $" +overall+ " dollars worth of fuel for grilling this year.");
console.log("So it boils down to this...\nGet ready to buy $" +overall+ " dollars worth of fuel for grilling this year.");
