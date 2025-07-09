let btn = document.querySelectorAll(".btn");
for (button of btn){
    button.onclick = sayHello; // () - not to use this only need to write function name only.. 
    button.onmouseenter = function(){
        console.log("you entered a button.")
    }
}

function sayHello (){
    alert("Hello!");
}

// function (){
//     alert("Hello!");
// }

let btn2 = document.querySelectorAll(".btnListener");
for (button of btn2){
    // button.addEventListener("click" , sayHello);
    button.addEventListener("dblclick" , sayHari);
}

function sayHari() {
    alert("Hari");
}