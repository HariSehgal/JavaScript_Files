//Question 1
let num = 31;
if(num % 10 == 0){
    console.log("Good");
}else{
    console.log("Bad");
}

//Question 2
let Name = prompt("Enter name");
let age = prompt("Enter age");
alert(`${Name} is ${age} years old.`);

//Question 3
let Quater = 5;
switch(Quater){
    case 1 :
        console.log("January, February, March");
        break;
    case 2 :
        console.log("April, May, June");
        break;
    case 3 :
        console.log("July, August, September");
        break;
    case 4 :
        console.log("October, November, December");
        break;
    default :
        console.error("Invalid Quater");
}

//Question 4
let str = 'Apples';
if((str[0]==='A' || str[0]==='a') && str.length > 5){
    console.log("Golden String");
}else{
    console.log("Not a golden string");
}

//Quetsion 5
let a = 10;
let b = 5;
let c = 6;
if(a > b && a > c){
    console.log("Largest Number is :",a);
}else if(b > a && b > c){
    console.log("Largest Number is :",b);
}else if(c > a && c > b){
    console.log("Largest Number is :",c);
}

//Question 6
let num1 = 33;
let num2 = 47852;
if((num1 % 10) == (num2%10)){
    console.log("Both numbers have same last digits");
}else{
    console.log("Not have same last digits");
}