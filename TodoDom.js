let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.innerText = input.value;
    li.appendChild(delBtn);
    input.value = ""
    ul.appendChild(li);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for (DelBtn of delBtns){
//     DelBtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }