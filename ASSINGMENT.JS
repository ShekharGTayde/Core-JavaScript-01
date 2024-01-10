Q1 Writ a program that grads studnts basd on thir mar s
 If gratr than 90 thn A Grad
 If btwn 70 and 90 thn a B grad
 If btwn 50 and 70 thn a C grad
 Blow 50 thn an F grade
ANSWER:-
const marks=45 
let grade;
if(marks>=90){{
   grade="A grade"
}elseif(marks>=70 && marks<=90);{ 
    grade="B grade"
}elseif(marks>=50 && marks<=70);{
    grade="C grade"
} }else {
   grade="F grade"
} 



Q2 Gnrat numbrs btwn any 2 givn numbrs.
Ex.
Const num1 = 10;
Const num2 = 25;
Output: 11,12,13,, 25

ANSWER:-

let num1=10;
let num2=25;

for(i=10;i<=25;i++){
    console.log(i);
}
Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.

ANSWER:-

const num=0
num>0?console.log("positive"):console.log("negative");console.log("zero")


Q4. Describe the usage of the comma operator in JavaScript and provide an example.
ANSWER:-Comma is used to descibed multiple variable.

ex,let num=(4,8,9)
console.log("num")



Q5. You're creating a basic login system. Make a login function with two things: a username and a
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
successful"; if not, show "Invalid credentials."

ANSWER:-
let username="admin"
let password=12345

if(username="admin"&&password==12345){
    console.log("login succesfully")
}else{
    console.log("invalid credential")
}

Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.

ANSWER:-

let paymentmethode="paypal"
switch(paymentmethode){
    case 'credit':
    console.log("processing fee for payment :2%")
    break;
    case 'debit':
    onsole.log("proccesing ee for payment:1.5%")
    break;
    case 'paypal':
    console.log("procesing fee for payment:3%")
    break;
    defoult;
    console.log("payment methode not accepted")
}

Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".

ANSWER:-
let temp=35

let weathercondition=(temp>30)?console.log('temperature is hot'):('temperature is moderate')


Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
Answer:

Answer:

