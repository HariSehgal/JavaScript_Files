let url = "https://catfact.ninja/fact";
let fact = document.querySelector("#fact");
let btn = document.querySelector("button");

async function getFact(){
    try{
        let res = await axios.get(url);
        fact.textContent = res.data.fact;
    }catch(err){
        fact.textContent = "No fact found";
    }
}

btn.addEventListener("click",function(){
    getFact();
})

