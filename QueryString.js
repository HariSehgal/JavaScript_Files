let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("#data");

btn.addEventListener("click", async ()=>{
    let country = inp.value;
    getColleges(country);
})

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        let ConArr = res.data;
        ul.innerText="";
        for(obj of ConArr){
            console.log(obj.name);
            let li = document.createElement("li");
            li.innerText = obj.name;
            ul.appendChild(li);
        }
    }catch(err){
        console.log(err);
    }
}

