//Question 1
const sq = (num) => (
    num * num
);
console.log(sq(5));

//Question 2
let id = setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(() =>{
    clearInterval(id);
},10000);