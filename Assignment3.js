// assingment 3

var a = [];
var b = new Array();
var c = ["apple", "banana", "cherry"];
var d = [1, 2, 3, 4, 5];
var e = [true, false, true, false];
var f = ["hello", 42, true, null];

var g = ["Jazz", "Zong", "Ufone", "Telenor"];
var h = ["SSC", "HSC", "BCS", "BS", "B.Com", "MS", "M.Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
for (var i = 0; i < h.length; i++) {
    document.write((i + 1) + ") " + h[i] + "<br>");
}

var movies = [];
movies.push("Avengers");
movies.push("Inside Out");
movies.push("Spectre");
movies.push("Jurassic World");
document.write("<h2>Top Movies of 2015:</h2>" + movies + "<br>Length: " + movies.length);

var cars = ["BMW", "Audi", "Ferrari", "Mercedes"];
document.write("<h2>Favorite Cars:</h2> First Index: 0 <br> Car at First Index: " + cars[0] + "<br> Last Index: " + (cars.length - 1) + "<br> Car at Last Index: " + cars[cars.length - 1]);

var students = ["Ali", "Ahmed", "Sara"];
var scores = [450, 390, 420];
var totalMarks = 500;
for (var j = 0; j < students.length; j++) {
    document.write("<br>Score of " + students[j] + " is " + scores[j] + ". Percentage: " + (scores[j] / totalMarks * 100) + "%");
}

var colors = ["Red", "Blue", "Green"];
document.write("<h2>Colors:</h2>" + colors);
var newColor = prompt("Enter color to add at the beginning:");
colors.unshift(newColor);
document.write("<br>Updated Colors: " + colors);
var newColorEnd = prompt("Enter color to add at the end:");
colors.push(newColorEnd);
document.write("<br>Updated Colors: " + colors);
colors.unshift("Purple", "Pink");
document.write("<br>Updated Colors: " + colors);
colors.shift();
document.write("<br>Updated Colors: " + colors);
colors.pop();
document.write("<br>Updated Colors: " + colors);
var index = prompt("Enter index to add a color:");
var colorName = prompt("Enter color name:");
colors.splice(index, 0, colorName);
document.write("<br>Updated Colors: " + colors);
var delIndex = prompt("Enter index to delete colors:");
var delCount = prompt("How many colors to delete?");
colors.splice(delIndex, delCount);
document.write("<br>Updated Colors: " + colors);

var scoresArr = [320, 230, 480, 120];
scoresArr.sort();
document.write("<h2>Sorted Scores:</h2>" + scoresArr);

var fruits = ["strawberry", "apple", "orange", "banana"];
fruits.sort();
document.write("<h2>Sorted Fruits:</h2>" + fruits);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.write("<h2>Selected Cities:</h2>" + selectedCities);

var words = ["This", "is", "my", "cat"];
document.write("<h2>String:</h2>" + words.join(" "));

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");
document.write("<h2>FIFO:</h2>");
while (fifo.length) {
    document.write("<br>Out: " + fifo.shift());
}

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
document.write("<h2>LIFO:</h2>");
while (lifo.length) {
    document.write("<br>Out: " + lifo.pop());
}

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<h2>Phone Manufacturers:</h2><select>');
for (var k = 0; k < manufacturers.length; k++) {
    document.write("<option>" + manufacturers[k] + "</option>");
}
document.write("</select>");

var multiArray = [[], [], []];

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write("<h2>Matrix:</h2>");
for (var l = 0; l < matrix.length; l++) {
    document.write(matrix[l].join(" ") + "<br>");
}
