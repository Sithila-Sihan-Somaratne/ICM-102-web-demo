console.log("Hello Sithila");
var name = "Sithila";
console.log(name + " Is My Name");
function print() {
    console.log("Print called..!");
}
print();
var x = 5;
var y = 4;
if (x > y || x == 6) {
    console.log("Hello ICET.....");
}
function getMarks() {
    var mark1 = parseInt(document.getElementById('mark1').value);
    var mark2 = parseInt(document.getElementById('mark2').value);
    var mark3 = parseInt(document.getElementById('mark3').value);
    var mark4 = parseInt(document.getElementById('mark4').value);
    var mark5 = parseInt(document.getElementById('mark5').value);
    document.getElementById('result').innerHTML = mark1 + mark2 + mark3 + mark4 + mark5;
    console.log(mark1);
    console.log(mark2);
    console.log(mark3);
    console.log(mark4);
    console.log(mark5);
    var total = mark1 + mark2 + mark3 + mark4 + mark5;
    var average = total / 5;
    if (average > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

function getAccount() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dbUserName = "sithilass23@gmail.com";
    var dbPassword = "SithiSihan@23!?";
    if (email == dbUserName && password == dbPassword) {
        alert("Login succeeded");
    } else {
        alert("Login failed");
    }
}

var number = 45;
if (number > 50) {

} else if (number > 45) {

} else if (number > 35) {

} else {

}

var num = 90;
num = num + 2;
console.log(num);

var num2 = 45;

num2++;

// student ----> Subjects 3 marks
// avg
// 75>= ------> A
// 65>= ------> B
// 55>= ------> C
// 35>= ------> S
// non of these  ------> F

var mark1 = 54;
var mark2 = 76;
var mark3 = 98;

var total = mark1 + mark2 + mark3;
var average = total / 3;
if (average >= 75) {
    console.log("A");
} else if (average >= 65) {
    console.log("B");
} else if (average >= 55) {
    console.log("C");
} else if (average >= 35) {
    console.log("S");
} else {
    console.log("F");
}

var stdName = "Pasindu";

switch (stdName) {
    case "Yasindu":
        console.log("Hi Yasindu");
        break;
    case "Kavindu":
        console.log("Hi Kavindu");
        break;
    case "Pasindu":
        console.log("Hi Pasindu");
        break;
    default:
        console.log("Not matched !");
}

var month = "January";


switch (month) {
    case "January":
        alert("දුරුතු");
        break;
    case "February":
        alert("නවම්");
        break;
    case "March":
        alert("මැදින්");
        break;
    case "April":
        alert("බක්");
        break;
    case "May":
        alert("වෙසක්");
        break;
    default:
        alert("Not matched !");
}

for (var i = 0; i < 2; i++) {
    console.log("Hello!");
}

// get a number from user
// multiply that number using 1,2,3,4,5 then re assign it

function generate() {
    var mark1 = parseInt(document.getElementById('num').value);
    num += 1;
    var newNumber = num;
    for (var i = 0; i < 6; i++) {
        newNumber *= i;
    }
    if (newNumber % 2 == 0) {
        alert("You won!");
    } else {
        alert("You failed!");
    }
}

//check final value is odd or even
//if even alert user win.. if not user failed

var numb = 32;

do {
    
} while (numb > 30);

var stbName = "Kavindu";
stbName = 90;

var countries = ["Australia", "Bahamas","Iceland","Oman","Uganda"];

console.log(countries[1]);

for(var val in countries){
    console.log(val);
}

for(var val of countries){
    console.log(val);
}

var rainData = [34, 65.7, 65.3, 23.5, 78.9, 90.78];

var total=0;
for(var i=0; i<rainData.length; i++){
    total += rainData[i];
}
console.log(total/rainData.length);

var nome="Sithila";
var upper=nome.toUpperCase();
var modified="["
for(var i=0; i<upper.length; i++){
    modified+=upper[i];
    if(i!==upper.length-1){
        modified+=", ";
    }    
}
modified += "]";
console.log(modified);

var stdName="Yasindu";  //String
var stdAge = 24; // Number
var stdMark = 90.67; // Number
var isMarried = true; // Boolean

//js Objects

var myCar = {brand:"Toyota", model:"Corolla", engNo:"AE12344", color:"black"}


//JSON Objects
{
    "name"="Yasindu",
    "address"="panadura",
    "age"=26
}

/////////////////////////////////////////

//variable types
//var, let, const


var val1 = 10;
val1 = 89;

let var2 = 90;
var2 = 67;

// const var3 = 56;
// var3=78;

//////////////////////////

var val3 = 45;
var val3 = 34;

// let val4 = 78;
// let val4 = 57;

// const val5 = 89;
// const val5 = 34;

/////////////////////////


//var is globle scope
var val6 = 23;

{
    console.log(val6);
    var val7 = 34;
}

console.log(val7);


let val8 = 23;

{
    console.log(val8);
    let val9 = 34;
}

console.log(val9);


const val10 = 23;

{
    console.log(val10);
    const val11 = 34;
}

console.log(val11);

//////////////////////////////

function saveData() {

}

saveData();

const saveData = function () {

}

saveData();

//arrow functions
const deleteData = () => {

}

deleteData();

///////////////////////////

function printData(name,age){
    console.log(name+" "+age);
    return name;
}

