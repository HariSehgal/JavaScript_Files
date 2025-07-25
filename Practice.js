let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button")
button.addEventListener("click",function(){
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");
    let li = document.createElement("li");
    li.innerText = input.value;
    li.append(del);
    ul.appendChild(li);
    input.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName = "BUTTON"){
        let li = event.target.parentElement;
        li.remove();
    }
})