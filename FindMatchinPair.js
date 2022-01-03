/*
Given 2 arrays, creates a function that let's user know (true/false)
wheather these 2 arrays contains 2 common items

For example1:
const arrayOne = ['a','b','c','x']
const arrayTwo = ['z','y','i']
Should return false
**************************
For example2:
const arrayOne = ['a','b','c','x']
const arrayTwo = ['z','y','x']
Should return true

*/

//**************************  Interview discussion **************************
/*  
1. Are there only characters in the given arrays?
Ans: Yes
2. If any of the array is empty, simply return false, right?
Ans: Yes
3. Can the character in the array be repeated?
Ans: No
4. Are the characters going to be case senstive?
And: Yes
*/

//First thing on the top of my head is to compare each element of first array with every element of second array
//that would give me O(n^2) because for every i'th element of first array, I am comparing every j element of the second array
const arrayOne = ['a','b','c','x'];
const arrayTwo = ['z','y','X'];

function GetMatchedElements(arrayFirst, arraySecond) {
    //if (arrayOne.length == 0 || arrayTwo.length == 0 ) return false;
    for(let i of arrayOne){
        for(let j of arrayTwo){
            if(i.toLowerCase() == j.toLowerCase()) return true;
        }
    }
    return false;   
}

console.log(GetMatchedElements(arrayOne, arrayTwo));

