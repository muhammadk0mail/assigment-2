// ------------------------------------------------------
// ---------------------CHAPTER 01-----------------------
// ------------------------------------------------------

// Q1. Write a script to greet your website visitor using JS alert box.
// alert("Welcome to the website");

// Q2:Write a script to display following message on your web page:
// alert("Error! Please enter a valid password");

// Q3. Write a script to display following message on your web page: (Hint : Use line break)
 // alert("Welcome to JS Land... \n Happy Coding!");

//  4. Write a script to display following messages in sequence:
// alert("Welcome to JS Land...");

// --------------------------------------------------------
// --------------------------------------------------------

// ------------------------------------------------------
// ---------------------CHAPTER 02-----------------------
// ------------------------------------------------------

// 1. Declare a variable called username.
// var x='username';

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName='muhammad kumail';

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box
// var message='Hello World';
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name='Muhammad Kumail';
// var age='20';
// var certificate='certified Mobile application Development';
// alert(name);
// alert(age);
// alert(certificate);

// 5. Write a script to display the following alert using one JS variable:
// var x = alert("PIZZA \nPIZZ \nPIZ \nPI \nP")

// 6. Declare a variable called email and assign to it a string that represents your 
// Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)
// var email='komailkhan235@gmail.com';
// alert('My email address is ' +email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// Display the following message in an alert box:
// var book=' A smarter way to learn JavaScript';
// alert('I am trying to learn from the Book '+book);


// 8. Write a script to display this in browser through JS
// document.write('Yah! I can write HTML content throgh javascript');

// 9. Store following string in a variable and show in alert and 
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var str='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(str);
// --------------------------------------------------------
// --------------------------------------------------------


// ------------------------------------------------------
// ---------------------CHAPTER 03-----------------------
// ------------------------------------------------------
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age=18;
// alert('In am '+age +' year old');


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
// age =0;
// age++;
// alert('You have visited this site '+  age +' times');


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear='20';
// document.write('My birth year is '+ birthYear + '<br /> Data type of my declared variable is number');

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// var Visitor_name='John Doe';
// var Product_title='T-shirt(s)';
// var Quantity='5';

// document.write(Visitor_name +' ordered ' + Quantity +' '+ Product_title + ' on XYZ Clothing store');
// --------------------------------------------------------
// --------------------------------------------------------

// ------------------------------------------------------
// ---------------------CHAPTER 04-----------------------
// ------------------------------------------------------


// 1. Declare 3 variables in one statement.
// var a = 1;
// var b = 2;
// var c= 3;

// 2. Declare 5 legal variable names
// var x='5';
// var komail='6';
// var _komail='7';
// var ya='1';
// var _ko='2';

// 2. Declare 5 illegal variable names
// var 9ko='komail';
// var k o=komail;
// var #io='kom';
// var -ko='l';
// var !ko=kom;

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// var str1=' Variable names cannot contain spaces. ';
// var str2=' Variable names must begin with a letter, an underscore (_) or a dollar sign ($). ';
// var str3=' Variable names can only contain letters, numbers, underscores, or dollar signs. ';
// var str4=' Variable names are case-sensitive. ';

// document.write('Rules for naming JS variables \n'+'Variable names can only contain ' + str1 + str2 + str3 + str4 +' and ' + str5 + '\n For example $my_1stVariable');


// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------


// Chapter 5


// 1:Write a program that take two numbers & add them in a  new variable. Show the result in your browser.
/*
var a = 5;
var b = 6;
var total = a + b;
document.write('<h1>' + a +' + ' + b  + ' = ' + total +'</h1>');
*/

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
/*
var a = 6;
var b = 5;
var total = a - b;
document.write('<h1>' + a +' - ' + b  + ' = ' + total +'</h1>');
*/

/*
var a = 6;
var b = 5;
var total = a * b;
document.write('<h1>' + a +' * ' + b  + ' = ' + total +'</h1>');
*/

/*
var a = 6;
var b = 5;
var total = a / b;
document.write('<h1>' + a +' / ' + b  + ' = ' + total +'</h1>');
*/

/*
var a = 6;
var b = 5;
var total = a % b;
document.write('<h1>' + a +' % ' + b  + ' = ' + total +'</h1>');
*/


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.

/*
var a;
document.write('<h1>'+ ' Value After variable  declaration is ' + a + '</h1>');
 a = 5;
 document.write('<h1>'+ ' Initial value is : ' + a + '</h1>');
 a++;
 document.write('<h1>'+ ' value after incrementing is : ' + a + '</h1>');
 a = a+7;
 document.write('<h1>'+ ' value after addition  is : ' + a + '</h1>');
a--;
document.write('<h1>'+ ' value after decrementing  is : ' + a + '</h1>');
a = a%3;
document.write('<h1>'+ ' The remainder is : ' + a + '</h1>');
*/

// 4. Cost of one movie ticket is 600 PKR. Write a script to  store ticket price in a variable
// & calculate the cost of buying 5 tickets to a movie.
// var a = 600;
// var b = 5;
// document.write('<h1>'+ 'Total cost to buy ' + b +' Tickets to movie is '+(a*b)+' PKR' +'</h1>')


// 5. Write a script to display multiplication table of any  number in your browser.
/*
var a =prompt('Enter the table number');
var b = 10;
for(var i=1 ; i <= b; i++)
{
    document.write(a +' * ' + i  +' = ' +(a*i) + '<br>');
}
*/

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var a = 25;
// var b = 70;
// oC = (oF-32) * 5/9;
// oF = (oC*9/5) + 32;
// document.write(oC)

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

/*
var p1=650;
var p2=100;
var q1=3;
var q2=7;
var shipment=100;

document.write('<h1> Shopping Cart </h1>')

document.write('Price of item 1 is'+ p1 +'<br />');
document.write('Quantity of item 1 is'+ q1 +'<br />');

document.write('Price of item 2 is'+ p2 +'<br />');
document.write('Quantity of item 2 is'+ q2 +'<br />');



document.write('Total cost of your order is:'+ ((q1*p1)+(q2*p2)+shipment));
*/


// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani
//  Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80
// Pakistani Rupee  and 1 Saudi Riyal = 28 Pakistani Rupee)
/*
var d = 10;
var s = 25;
document.write('Total Currency in PKR is : ' + (d*104.80));
document.write('Total Currency in PKR is : ' + (s*28));
*/

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

/*
var a = 10;
b = a + 5;
c = a * 5;
d = a / 2;

document.write('The addition is : '+b +'<br> <br>' +'The Multiplication is : '+ c +'<br> <br>' + 'The Division is : '+ d);
*/

// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

/*
var cyear=2021;
var byear=2000;
document.write('The age of the year is:' + (cyear-byear));
*/

// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

/*
var rc = 20;
var c =  2 * 3.142 * rc;
var a = 3.142 *rc * rc;
document.write('The radius is: '+ rc +'<br> '+'The circumference is: '+c + '<br>' + 'The area is: '+ r);
*/

// ----------------------------------------------

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

/*
var a = 10;
document.write('The value of a is :'+ a +'<br><br>');

document.write('----------------------------------------'+'<br><br>');

document.write('The value of ++a is: '+ (++a) +'<br>');
document.write('The value of a is: '+a +'<br> <br>');


document.write('The value of a++ is: '+ (a++) +'<br>');
document.write('The value of a is: ' + a +'<br> <br>');


document.write('The value of --a is: '+(--a) +'<br>');
document.write('The value of a is: '+a +'<br> <br>');

document.write('The value of a-- is: '+(a--) +'<br>');
document.write('The value of a is: ' + a +'<br> <br>');

*/

// 2. What will be the output in variables a, b & result after execution of the following script:

/*
var a = 2, b = 1;
document.write('The a  is:'+a+'<br><br>');
document.write('The b is:'+b+'<br><br>');
document.write('The --a - --b is:'+ (--a - --b) +'<br><br>');
document.write('The --b is:'+ (--b) +'<br><br>');
document.write('The ++b is:'+ (++b) +'<br><br>');
document.write('The --b is:'+ (--b) +'<br><br>');
document.write('The b-- is:'+ (b--) +'<br><br>');
var result = --a - --b + ++b + b--;
document.write('The result is:'+result+'<br>');
*/

