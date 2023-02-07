//Problem 1
/*
The function will firstly multiply 3 with function call number. Then with multiply I added 10 and get total. After that I divide total by 2. After all, I minus 5 from the last result. Lastly, I use return to return the final result.
*/
function mindGame(number){ 
   if(typeof number !== 'number'){
    return 'please enter a number';
   }
    const multiply = number * 3;
    const total = multiply + 10;
    const division = total / 2;
    const minus = division - 5;
    return minus;
}

const finalNumber= mindGame(50);

// Problem 2
/* 
This function is used to count the string length and find that if it is odd or even. So, I use If 'if the name length is divided by 2 it will be even else it will be odd.
*/
function evenOdd(name){
    if(typeof name !== 'string'){
     return 'please enter a name'
    }
 else if(name.length % 2==0){
 return 'even';
}
else{
    return 'odd';
}
} 

const EvenOrOdd= evenOdd('Phero');


// Problem 3
/*
 In this function I used if to see that after minus 7 from the parameter if the result is less than 7 I return the result else multiply 2 with the result and I got a final output.
*/
function isLGSeven(onenumber){
    let lessOne = onenumber - 7;
    if(typeof onenumber !== 'number'){
        return 'please enter a number';
    }
    else if(lessOne < 7){
        return lessOne;
    }
    else{
        return lessOne * 2;
    }
}
const theNumber = isLGSeven(6);

// Problem 4
/* 
This function is used to find Bad Data especially negative numbers. I decided to use for loop though I could use while loop. Because for loop is compact version. And default count valued 0.
*/
function findingBadData(ages){
  let count =0;
  if(typeof ages !== 'object'){
    return 'please enter an array';
  }
  for(let i = 0; i<ages.length; i++){
    if(ages[i] < 0){
        count ++;
    }
  }
  return count;
}
const finalBadData = findingBadData([ -4, -9, -5, -33, -55 ]);


//Problem 5 (final)
/*
In this function I used 3 parameters. Firstly, I multiply 1st parameter with 21 than multiply 2nd parameter with 32 also multiply 3rd parameter with 43 after all I sum these 3 results. Than I use if and add an condition that is the sum is more than 1000 * 2  if so return that minus 2000 from the sum. Else return the sum.
*/
function gemsToDiamond(firend1, friend2, friend3){
    if(typeof firend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number'){
        return 'please provide all valid numbers';
      }
  const firstFriend = firend1 * 21;
  const secondFriend = friend2 * 32;
  const thirdFriend = friend3 * 43;
  const sumOfGems = firstFriend + secondFriend + thirdFriend;
  if(sumOfGems >= 1000 * 2){
    return sumOfGems - 2000;
  }
  else{
    return sumOfGems;
  }
  
}
const gems = gemsToDiamond(100, 5, 1);
