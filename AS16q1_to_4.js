//Question 1
const arrayAverage = (arr) =>{
    let sum = 0;
    let len = arr.length;
    for (num of arr){
        sum = sum + num;
    }
    return (sum/len);
}

console.log("Average of numbers of arrays : ",arrayAverage([1,2,3,4,5,6]));

//Question 2
const isEven = (num) => {
    if(num % 2 == 0){
        return 1;
    }else{
        return 0;
    }
}

let check = isEven(20);
if (check == 1){
    console.log("It is an even number");
}else{
    console.log("It's not an even number");
}

//Question 3
const object = {
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000); //output - undefined after 1 sec

//Question 4
let length = 4;
function callback(){
    console.log(this.length);
}
const obj = {
    length : 5,
    method(callback){
        callback();
    }, 
};
obj.method(callback);//output - 4