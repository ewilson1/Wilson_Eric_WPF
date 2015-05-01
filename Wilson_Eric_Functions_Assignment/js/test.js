/**
 * Created by ericwilson1 on 4/29/15.
 */
//alert("test");
//console.log("Test");

 //var x = 3;

//(x>=5) ? console.log("x is greater than or equal to 5") : console.log("x is less 5");


var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
}
console.log("Today is " + day);


//-----ugh----

value=("Banana");
switch(fruits) {
    case "Banana":
        text = "Banana is good!";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;

    // add case here

    default:
        text = "I have never heard of that fruit.";
}
console.log(text);
