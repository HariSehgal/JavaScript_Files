let age = 24;
if(age >= 18){
    console.log("You can vote");
    if(age > 22){
        console.log("You can drive");
    }else{
        console.log("You can not drive");
    }
}else if(age > 20){
    console.log("You are in your 20's");
}else{
    console.log("Not Eligible to vote");
}