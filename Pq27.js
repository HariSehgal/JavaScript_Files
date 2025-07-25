//Question 1

function poem(){
    console.log("Hello wonder how are you, i am fine what about you!!");
}

poem();

//Question 2

function dice(){
    let num = Math.floor(Math.random()* 6) + 1;
    console.log("Number on rolling a dice : ",num);
}

dice();

//Question 3 
 function average(a,b,c){
    console.log("Average : ",(a+b+c)/3);
}

average(2,3,4);

//Question 4

function table(n){
    for(let i = 1 ;i<=10 ;i++){
        console.log(n*i);
    }
}

table(10);

//Question 5
let s = 0;
function sum(n){
    for(let i = 1 ; i<=n ; i++){
        s = s + i;
    }
    return s;
}

console.log(sum(10));

//Question 6
let concat = "";
function strConcat(arr){
    for (word of arr){
        concat = concat + word;
    }
    return concat;
}

console.log(strConcat(["hello","world","how","are","you"]));