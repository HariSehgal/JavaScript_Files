let max = prompt("Enter the limit :");
let random = Math.floor(Math.random()*max) + 1;
// console.log(`Random Number ${random}`);
let guess = prompt("Enter guess or quit");
while(true){
    if(guess == "quit"){
        console.log("quitting game");
        break;
    }
    else if(random == guess){
        console.log("Right answer");
        break;
    }else if(guess < random){
        console.log("hint : you enter small number than random number");
        guess = prompt("Enter guess or quit");
    }else if(guess > random){
        console.log("hint : you enter larger number than random number");
        guess = prompt("Enter guess or quit");
    }
}