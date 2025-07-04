// Question 1
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);

// Question 2
let ans2 = arr.slice(-n);
console.log(ans2);

//Question 3
let str = prompt("Enter string");
if(str.length == 0){
    console.log("String is empty");
}else{
    console.log("String is not empty");
}

//Question 4
let str2 = "aPnACOlleGe";
let index = 6;
if(str2[index] == str2[index].toLowerCase()){
    console.log("yes, Lower case");
}else{
    console.log("no, Lower Case");
}

// Question 5
let string = "   Hello Buddy   ";
console.log(string);
console.log(string.trim());

//Question 6
let array = ['hari',69,'cwl','abc',76];
let item = 69;
console.log(array.includes(item));