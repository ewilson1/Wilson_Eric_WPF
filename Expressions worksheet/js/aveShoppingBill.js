/**
 * Created by ericwilson1 on 4/15/15.
 */
// Eric Wilson, April 15th, 2015 Average shopping bill//
// We must calculate the average weekly grocery shopping spending over the past five weeks. We will store the past five grocery totals as a list in an array. We must create an expression that will use the items in the array to calculate the average amount spent on groceries. Of NOTE: there should only be ONE given for this problem set, the array holding the five weekly totals.//

var weeklyTotals = [234, 456, 567, 288, 345]; // these are the amounts of money spent each week over the past five weeks

var total = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4]; // this is the total amount for all five weeks
var ave = ((weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4]) / 5); // this is the total divided by the 5 weeks to get your weekly average
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + ave + " per week");