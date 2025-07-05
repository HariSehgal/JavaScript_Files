//Question 1
let arr=[1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

//Question 2
let number = 287152;
let copy = number;
let count = 0;
if(copy === 0){
    console.log("count :",1);
}
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
if(count > 0){
    console.log("count :",count);
}

//Question 3
let sum = 0;
if(number === 0){
    console.log("Sum :",0);
}
while(number > 0){
    sum = sum + number % 10;
    number = Math.floor(number/10);
}
if(sum > 0){
    console.log("Sum :",sum);
}

//Question 4
let Num = 7;
let fact = 1;
if(Num === 0){
    console.log("Factorial :",1);
}
for (Num ; Num >= 1 ; Num--){
    fact = fact*Num
}
if (fact > 1){
    console.log("Factorial :",fact);
}

//Question 5
let array = [2,10,6,4,9,17,31];
let large  = 0;
for (let i = 0 ; i < array.length ; i++){
    if(array[i] > large){
        large = array[i]
    }
}
console.log("largest number :",large)
