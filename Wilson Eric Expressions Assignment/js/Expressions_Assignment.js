/*
 Eric Wilson
 SDI Section 01
 Expressions Assignment
 April 16, 2015
 */

//alert("test to see if connected");

//Brainstorm an idea for a calculator of some kind. Must use an array, 3 prompts for information from the user and use math expressions, et al.

//Givens: (what we will ask the user for) Let's Grill! 1. How much does a tank of fuel cost?, 2. How long does it take to grill thier foood, in minutes?, 3. How many chickens, in minutes per chicken, can you grill before the tank runs out? What is the average cost of fuel per chicken?

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
alert("They can grill " +grillTime+ " " +food+ "'s until the tank runs out.");
console.log("They can grill " +grillTime+ " " +food+ "'s until the tank runs out.");

