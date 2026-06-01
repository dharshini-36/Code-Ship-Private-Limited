//check if a string contains a word
let str = "Hello JavaScript";
let pattern =/JavaScript/;
console.log(pattern.test(str));
console.log("____________________________________________________________");
console.log();

//validate an email address
let email = "dharshini@gmail.com";
let pattern1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
console.log(pattern1.test(email));
console.log("____________________________________________________________");
console.log();

//check mobile number
let mob = "934549854";
let pattern2 = /^[0-9]{10}$/;
console.log(pattern2.test(mob));
console.log("____________________________________________________________");
console.log();

//extract numbers from string
let string = "Order Id: 1234";
let result = string.match(/\d+/);
console.log(result[0]);
console.log("____________________________________________________________");
console.log();

//replace text
let s = "Hello Java";
let patrep = s.replace(/Java/,"JavaScript");
console.log(patrep);
console.log("____________________________________________________________");
console.log();

//name validation
let name ="Dharshini";
if(/^[a-zA-Z]+$/.test(name)){
    console.log("Valid name");
}
else{
    console.log("Invalid name");
}
console.log("____________________________________________________________");
console.log();

//username validation
let username = "dhar_37";
let regex = /^[a-zA-Z0-9_]{3,15}$/;
console.log(regex.test(username));
console.log("____________________________________________________________");
console.log();

//Password validation
let password = "user@123";
let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&?!]).{8,}$/;
console.log(reg.test(password));
console.log("____________________________________________________________");
console.log();

//find all numbers in a string.
let st = "Watermelon 50 Orange 100 Banana 150";
let pattern3 = st.match(/\d+/g);
console.log(pattern3);
console.log("____________________________________________________________");
console.log();

//remove extra spaces
let str1 = "Hello   My name is   Dharshini";
let res = str1.replace(/\s+/g," ");
console.log(res);
console.log("____________________________________________________________");
console.log();

//Extract all email address
let text = "Contact us through dhar@gmail.com or kiki@gmail.com";
let pattern4 = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
console.log(pattern4);
console.log("____________________________________________________________");
console.log();

//check date format
let date = "03/06/2007";
let exp = /^\d{2}\/\d{2}\/\d{4}$/;
console.log(exp.test(date));
console.log("____________________________________________________________");
console.log();

//split a string using multiple seperators
let fruits = "orange,banana;kiwi:strawberry,blueberry";
console.log(fruits.split(/[,:;]/));
console.log("____________________________________________________________");
console.log();

//find words starting with 'J'
let string2 = "Java JavaScript HTML CSS Python";
let words = string2.match(/\bJ\w+/g);
console.log(words);
console.log("____________________________________________________________");
console.log();


//validate indian pincode
let pincode = "600074";
let pattern6 = /^[1-9][0-9]{5}$/;
console.log(pattern6.test(pincode));
console.log("____________________________________________________________");
console.log();

//validate indian mobile number
let phno = "9345493854";
let pattern7 = /^[6-9]\d{9}$/;
if(pattern7.test(phno)){
    console.log("Valid Mobile number");
}
else {
    console.log("Not a valid mobile number");
}
console.log("____________________________________________________________");
console.log();
