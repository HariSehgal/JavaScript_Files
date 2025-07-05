//Question 1
function largeNums(arr,n){
    for (element of arr){
        if (element > n){
            console.log(element);
        }
    }
}
let arr = [10,7,9,15,13,16,20,1];
let n = 12;
largeNums(arr,n);

//Question 2
function extractStr(str){
    let ans = "";
    for (i of str){
        if(ans.indexOf(i) == -1){
            ans = ans + i;
        }
    }
    return ans;
}
let str = "abcdabcdefgggh";
let ans = extractStr(str);
console.log(ans);

//Question 3
function largeWord(country){
    let wordLength = 0;
    for (i of country){
        if (i.length > wordLength){
            wordLength = i.length;
        }
    }
    return wordLength;
}
let country = ["Australia","Germany","United States of America"];
let wordLength = largeWord(country);
for (i of country){
    if(i.length == wordLength){
        console.log(i);
    }
}

//Question 4
function countVowel(str1,strArr){
    let count = 0;
    for (j of str1){
        for(i of strArr){
            if (j == i){
                count = count + 1;
            }
        }
    }
    return count;
}
let strArr = ['a','e','i','o','u','A','E','I','O','U'];
let str1 = "Hello World How Are You ! I Am Fine";
let count = countVowel(str1,strArr);
console.log(`Number of vowels : ${count}`); 

//Question 5
function randomNum(start,end){
    let diff = end - start;
    let ranNum = (Math.floor(Math.random()*diff)) + start + 1;
    return ranNum;
}

console.log("Random Number : ",randomNum(5,10));