/*
Given 2 arrays, creates a function that let's user know (true/false)
whether these 2 arrays contains 2 common items

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

//************************** Interview discussion **************************
/*  
1. Are there only characters in the given arrays?
Ans: No, it can contain numbers, negative numbers, special characters
2. If any of the array is empty, simply return false, right?
Ans: Yes
3. Can the character in the array be repeated?
Ans: Yes, but can you avoid it?
4. Are the characters going to be case senstive?
Ans: No
5. can elements in arrays be num, [] or objects 
Ans: Absolutely yes
*/

//first approach: Bruteforce
/*
First thing on the top of my head is to compare each element of first array with every element of second array
that would give me O(a * b) because for every i'th element of first array, I am comparing every j element of the second array
Time Complexity: O(a * b)
Space Complexity: O(1)

this approcah will work with all the input types
becasue: js objects properties are going to be converted into string behind the carpet so [] === '[]'

even if numbers are repeated we are going to ignore them so no repetation
*/
console.log('********** first approach **********');
const arrayOne = ['a','b','c','x'];
const arrayTwo = ['z','y','x'];

console.log('Time Complexity: O(a * b)');
console.log('Space Complexity: O(1)');
console.log(arrayOne);
console.log(arrayTwo);
function GetMatchedElementsA_INTO_B(arrayFirst, arraySecond) {
    //if (arrayOne.length == 0 || arrayTwo.length == 0 ) return false;
    for(let i of arrayOne){
        for(let j of arrayTwo){
            if(i.toLowerCase() == j.toLowerCase()) return true;
        }
    }
    return false;   
}

console.log(GetMatchedElementsA_INTO_B(arrayOne, arrayTwo));


//Second approach: We can change first array to object and then compare property with second array to see if its exist
/*
Time Complexity: O(a + b)
Space Complexity: O(n)

step 1: Loop through first array and create object where properties === items in the array
const array1 = {
a:true,
b:true,
c:true,
x:true  }
step 2: Loop through second array and check if item in second array exist on created object
const array2[index] == array1.property

Edge cases: 
case 1: If you failed to give other array, So need to perform validations
case 2: If you pass null the validation will break since we are accesing length property
ans: array1== null || array2 == null |
*/


console.log('********** second approach **********');

console.log('Time Complexity: O(a + b)');
console.log('Space Complexity: O(n)');
console.log(arrayOne);
console.log(arrayTwo);
function GetMatchedElementsA_PLUS_B(array1, array2) {
    //step 1: Loop through first array and create object where properties === items in the array
    if ( array1 == null || array2 == null || array1.length == 0 || array2.length == 0 ) return false;
    const map = {};
    for (let i of array1) {
        //do not enter repetative array elements, checking if object doesn't hold the same value
        if(!map[i]){
            const item = i;
            map[item] = true;
        }
    }
    console.log(map);
    //step 2: Loop through second array and check if item in second array exist on created object
    for (let j of array2) {
        if(map[j]){
            return true;
        }
    }
    return false;
}
console.log(GetMatchedElementsA_PLUS_B(arrayOne, arrayTwo));

const arrayEmptyArrayOne = [[],'b','c','x'];
const arrayEmptyArrayTwo = ['z','y',[]];

console.log(arrayEmptyArrayOne);
console.log(arrayEmptyArrayTwo);
console.log(GetMatchedElementsA_PLUS_B(arrayEmptyArrayOne, arrayEmptyArrayTwo));


console.log('********** third approach **********');
console.log('Easy to read');
function GetMatchedElementsThird(arrayOne, arrayTwo) {
    return arrayOne.some(i => arrayTwo.includes(i));
}
console.log(arrayOne);
console.log(arrayTwo);
console.log(GetMatchedElementsThird(arrayOne, arrayTwo));
console.log(arrayEmptyArrayOne);
console.log(arrayEmptyArrayTwo);
console.log(GetMatchedElementsThird(arrayEmptyArrayOne, arrayEmptyArrayTwo));


console.log('********** fourth approach **********');
console.log('Easy to read');
function GetMatchedElementsFourth(arrayOne, arrayTwo) {
   return arrayOne.some(function (i) {
                for (let j of arrayTwo) {
                    return (i.toLowerCase == j.toLowerCase) // == wont match type so works for other items
                }
    })
}
console.log(arrayOne);
console.log(arrayTwo);
console.log(GetMatchedElementsFourth(arrayOne, arrayTwo));
console.log(arrayEmptyArrayOne);
console.log(arrayEmptyArrayTwo);
console.log(GetMatchedElementsFourth(arrayEmptyArrayOne, arrayEmptyArrayTwo));