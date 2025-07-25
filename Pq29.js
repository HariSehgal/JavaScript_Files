let para = document.createElement("p");
let body = document.querySelector("body");
body.append(para);
para.innerText = "Hey I'm Red!";
para.classList.add("red");
let head = document.createElement("h3");
head.classList.add("blue");
head.innerText = "I'm a blue h3";
body.append(head);

let div = document.createElement("div");
let inHead = document.createElement("h1");
let inPara = document.createElement("p");
inHead.innerText = "I'm in a div";
inPara.innerText = "ME TOO!";
body.append(div);
div.classList.add("properties");
div.insertAdjacentElement("afterbegin",inHead);
inHead.insertAdjacentElement("afterend",inPara);