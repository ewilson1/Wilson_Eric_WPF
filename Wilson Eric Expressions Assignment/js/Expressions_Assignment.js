/*
 Eric Wilson
 SDI Section 01
 Expressions Assignment
 April 16, 2015
 */

//alert("test to see if connected");

//Brainstorm an idea for a calculator of some kind. Must use an array, 3 prompts for information from the user and use math expressions, et al.

//Givens: (what we will ask the user for) Let's Grill! 1. How much does a tank of fuel cost?, 2. How long does it take to grill chicken, in minutes?, 3. How many chickens, in minutes per chicken, can you grill before the tank runs out? What is the average cost of fuel per chicken?

//Lets ask them what they like to grill.
var food = prompt("Let's Grill!\nDo you like Chicken or Steak on the grill?");
console.log("They like " +food+ " on the grill");

//Now lets ask how much they pay to have a full tank of fuel
var tank = prompt("How much did it cost you to fill up your tank?");
console.log("It cost them $" +tank+ " dollars to fill up their tank.")

//Now lets ask them how long it takes to cook their food
var time = prompt("How long does it take to cook your " +food+ " in minutes?")
console.log("It takes them " +time+ " minutes to cook their food")
