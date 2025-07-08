//question 2
let button = document.createElement("button");
let body = document.querySelector("body");
button.innerText = "Click Me"
body.append(button);
button.addEventListener("click",function(){
    button.style.backgroundColor = "green"; 
})

//question 3
const allowedCharacters = /^[a-zA-Z\s]*$/;
let head = document.querySelector("#head");
let input = document.querySelector("#input");
input.addEventListener("input",function(){
    if(allowedCharacters.test(input.value)){
        head.innerText = input.value;
    }else{
        head.innerText = " ";
    }
});