let h1 = document.querySelector("h1");

function changeColor(color){
    return new Promise((resolve) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },1000);
    })
}

// changeColor("red")
//     .then(()=>{
//         console.log("red color is completed");  
//         return changeColor("blue");
//     })
//     .then(()=>{
//         console.log("blue color is completed");
//         return changeColor("yellow");
//     })
//     .then(()=>{
//         console.log("yellow color is completed");
//         return changeColor("green");
//     })
//     .then(()=>{
//         console.log("green color is completed");
//         return changeColor("pink");
//     })
//     .then(()=>{
//         console.log("pink color is completed");
//     })

async function demo(){
    await changeColor("red");
    await changeColor("blue");
    await changeColor("yellow");
    await changeColor("green");
    await changeColor("pink");
}
demo();