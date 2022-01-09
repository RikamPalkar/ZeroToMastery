/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12] 
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

* all elements would be numbers
* negative numbers on the sorted order

approach 1: 0(n^2)
if 0 considered to be the max number 
for=> nums
0 < 1 = swap = 1 0 = [1 0 0 3 12]
0 < 0 = 0 0 = [1 0 0 3 12]
0 < 3 = swap = 0 3 = [1 0 3 0 12]
0 < 12 = swap = 0 12 = [1 0 3 12 0]
*/

//approach 2: 
// Time Complexity O(n), Space Complexity O(1)
//Error in code : Won't work with test cases starting from 0 [0,0,1], result in [0,1,0]
function MoveZeros(nums) {
    let countZeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
            nums.splice(i, 1);
            countZeros++;
        }       
    }
    for (let j = 0; j < countZeros; j++) {
                nums.push(0); 
    }
    return nums;
};
console.log(MoveZeros([0,0,1]))

// Modify increment condition
var moveZeroes = function(nums) {
    let countZeros = 0;
    for (let i = 0; i < nums.length; ) {
        if(nums[i] == 0){
            nums.splice(i, 1);
            countZeros++;
        } 
        else{
          i++;
        }      
    }
    for (let j = 0; j < countZeros; j++) {
                nums.push(0); 
    }
    return nums;
};