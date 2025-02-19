// 1
var n = prompt("Enter number:");
if (n % 3 == 0) {
    alert("Divisible by 3");
} else {
    alert("Not divisible by 3");
}

// 2
if (n % 2 == 0) {
    alert("Even");
} else {
    alert("Odd");
}

// 3
var age = prompt("Enter age:");
if (age > 18) {
    alert("Old enough");
} else {
    alert("Too young");
}

// 4
var name = prompt("Enter name:");
if (name == "Muntazir") {
    alert("Hello, " + name);
}

// 5
var num = prompt("Enter number:");
switch (num % 3) {
    case 0:
        alert("Divisible by 3");
    default:
        alert("Not divisible by 3");
}

// 6
var char = prompt("Enter character:");
var code = char.charCodeAt(0);
if (code >= 48 && code <= 57) {
    alert("Number");
} else if (code >= 65 && code <= 90) {
    alert("Uppercase letter");
} else if (code >= 97 && code <= 122) {
    alert("Lowercase letter");
}

// 7
var x = prompt("Enter first number:");
var y = prompt("Enter second number:");
var op = prompt("Enter operator:");
if (op == "+") {
    alert(x - (-y));
} else if (op == "-") {
    alert(x - y);
} else if (op == "*") {
    alert(x * y);
} else if (op == "/") {
    alert(x / y);
} else if (op == "%") {
    alert(x % y);
} else {
    alert("Invalid operator");
}

// 8
var t = prompt("Enter time (24hr format):");
if (t >= 6 && t <= 9) {
    alert("Breakfast");
} else if (t >= 11 && t <= 13) {
    alert("Lunch");
} else if (t >= 17 && t <= 20) {
    alert("Dinner");
} else {
    alert("Wait or get a snack");
}

// 9
var year = prompt("Enter year:");
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert("Leap year");
} else {
    alert("Not a leap year");
}

// 10
var pass = prompt("Enter password:");
if (!pass) {
    alert("Enter your password");
} else if (pass == "mypassword") {
    alert("Correct password");
} else {
    alert("Incorrect password");
}

// 11
var firstName = "Ali";
if (firstName == "Fahad") {
    document.write("Hello Fahad!");
} else {
    document.write("You are not Fahad");
}

// 12
var h = 13, g;
if (h < 18) {
    g = "Good day";
} else {
    g = "Good evening";
}
document.write("<br>" + g);

// 13
var n1 = prompt("Enter first number:");
var n2 = prompt("Enter second number:");
if (n1 > n2) {
    alert(n1 + " is larger");
} else if (n1 < n2) {
    alert(n2 + " is larger");
} else {
    alert("Both are equal");
}

// 14
if (n1 > 0) {
    alert("Positive");
} else if (n1 < 0) {
    alert("Negative");
} else {
    alert("Zero");
}

// 15
if (t >= 6 && t <= 9) {
    alert("Breakfast");
} else if (t >= 11 && t <= 13) {
    alert("Lunch");
} else if (t >= 17 && t <= 20) {
    alert("Dinner");
} else {
    alert("Wait or get a snack");
}

// 16
var v = prompt("Enter value:");
if (!isNaN(v)) {
    alert("Type: number");
} else {
    alert("Type: string");
}

// 17
var vowel = prompt("Enter a character:");
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" || 
    vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") {
    alert("True");
} else {
    alert("False");
}

// 18
alert(10 != 8);

// 19
var m = prompt("Enter month number:");
switch (parseInt(m)) {
    case 1:
        alert("January");
    case 2:
        alert("February");
    case 3:
        alert("March");
    case 4:
        alert("April");
    case 5:
        alert("May");
    case 6:
        alert("June");
    case 7:
        alert("July");
    case 8:
        alert("August");
    case 9:
        alert("September");
    case 10:
        alert("October");
    case 11:
        alert("November");
    case 12:
        alert("December");
    default:
        alert("Invalid month number");
}

// 20
var userAge = prompt("Enter your age:");
var voteable = userAge < 18 ? "Too young" : "Old enough";
alert(voteable);