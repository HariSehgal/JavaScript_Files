let smallImg = document.getElementsByClassName("oldImg");
for (let i = 0 ; i < smallImg.length ; i++){
    smallImg[i].src = "Spiderman1.png";
    console.log(`The value of image number ${i} is changed.`);
}

console.dir(document.querySelectorAll("div a"));

let anchor = document.querySelectorAll(".box a");
for(let i = 0; i<anchor.length ; i++){
    anchor[i].style.color = "yellow";
}
