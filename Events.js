let btn = document.querySelector("button");
btn.addEventListener("click",function(event){
    console.dir(event);
});
btn.addEventListener("dblclick",function(event){
    console.dir(event);
});

let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log("Key = ",event.key);
    console.log("Code = ",event.code);
    console.log("key was pressed");
})
// input.addEventListener("keyup", function(){
//     console.log("key was released");
// })

let form = document.querySelector("form");
form.addEventListener("submit" , function(event){
    event.preventDefault();
    let inp = this.elements[0];
    let pass = this.elements[1];
    console.log(inp.value);
    console.log(pass.value);
    alert(`Hi ${inp.value} your password is set to be ${pass.value}`);
})
let inp = document.querySelector("#formInp");
inp.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value = ",inp.value);
})
inp.addEventListener("input",function(){
    console.log("input event");
    console.log("final value = ",inp.value);
})