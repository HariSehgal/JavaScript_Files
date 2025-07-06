//Question 1
let input = document.createElement("input");
let button = document.createElement("button");
let body = document.querySelector("body");
button.innerText = "Click Me";
body.append(input);
body.append(button);
//Question 2
input.placeholder = "username";
button.id = "btn";
//Question 3
button.classList.add("#btn");
//Question 4
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("headStyle");
//Question 4
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);