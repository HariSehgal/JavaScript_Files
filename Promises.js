// function saveToDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDB("Hari",() => {
//     console.log("sucess 1 : data saved");
//     saveToDB("Vansh",() => {
//         console.log("sucess 2 : data saved");
//         saveToDB("Doraksh",() => {
//             console.log("sucess 3 : data saved");
//         },() => {
//             console.log("failure 3 : data not saved");
//         });
//     },() => {
//         console.log("failure 2 : data not saved");
//     });
// },() => {
//     console.log("weak connection : data not saved");
// });

function saveToDB(data){
    return new Promise ((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10) +1;
        if(internetSpeed > 4){
            resolve("sucess : data saved");
        }else{
            reject("weak connection");
        }
    }); 
}

saveToDB("apna college")
    .then((result) =>{
        console.log(result);
        console.log("Data 1 saved");
        return saveToDB("helloWorld");
    })
    .then((result)=>{
        console.log(result);
        console.log("Data 2 saved");
        return saveToDB("hari");
    })
    .then((result)=>{
        console.log(result);
        console.log("Data 3 saved");
    })
    .catch((error) =>{
        console.log(error);
        console.log("promise was rejected");
    });