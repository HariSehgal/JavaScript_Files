//Question 1
let arr = [1,2,3,4];

const square = arr.map((el) => (el*el));
console.log(square);

const sum = arr.reduce((sum,el) => (sum+el));
console.log(sum);

let avg = sum/arr.length;
console.log(avg);

//Question 2
const fiveIncrement = arr.map((el) => (el+5));
console.log(fiveIncrement);

//Question 3
let arr2 = ["hari" , "vansh" , "doraksh" , "hardik"];
const Upper = arr2.map((el) => (el.toUpperCase()));
console.log(Upper);

//Question 4
function doubleAndReturnArgs(array, ...number){
    let array2 = number.map((el) => (el*2));
    let array3 = [...array , ...array2];
    return array3;
}
console.log(doubleAndReturnArgs([1,2,3],4,4,5));

//Question 5
function mergeObjects(obj1,obj2){
    let newObj = {...obj1 , ...obj2};
    return newObj
}

let obj1 = {
    name : "hari",
    age : 19,
};

let obj2 = {
    course : "btech",
    cgpa : 9.4,
};

console.log(mergeObjects(obj1,obj2));
