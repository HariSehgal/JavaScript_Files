let JsonRes = '{"fact" : "Dogs never cheat their guardians" , "status" : "success"}';
console.log(JsonRes);
let ValidRes = JSON.parse(JsonRes);
console.log(ValidRes);
console.log(ValidRes.fact);

let student  = {
    name : "Hari Sehgal",
    age : 19
};

let JsonConv = JSON.stringify(student);
console.log(JsonConv);