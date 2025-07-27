let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#dogImg");
let btn = document.querySelector("button");
async function getImage(){
    try{
        let res = await axios.get(url);
        let image = res.data.message;
        img.src = image;
        img.height = 400;
        img.width = 400;
    }catch(err){
        console.log("No image found");
    }
}

btn.addEventListener("click",function(){
    getImage();
})

