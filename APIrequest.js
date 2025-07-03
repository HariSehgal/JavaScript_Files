let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) =>{
//     return response.json();
// })
// .then((data)=>{
//     console.log("Data 1");
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log("Data 2");
//     console.log(res.fact);
// })
// .catch((err) =>{
//     console.log(err);
// });

// console.log("I am happy");

async function getFact(){
    try{
        let res = await fetch(url);
        let data =  await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 =  await res2.json();
        console.log(data2.fact);
    }catch(err){
        console.log(err);
    }
}
getFact();