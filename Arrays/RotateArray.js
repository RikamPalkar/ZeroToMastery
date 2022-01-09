/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7, 1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

//Using external array
var rotate = function(nums, k) {
    let outputArray = nums.slice(0, nums.length - k);
    outputArray.unshift(...nums.slice(nums.length - k, nums.length));
    return outputArray;
};


//Could you do it in-place with O(1) extra space?
function RoateArray(nums,k) {
let i = 0;
    while(i < k) {
        nums.unshift(nums.pop());   
        i++; 
    }
  return nums;  
}

//console.log(RoateArray([1,2,3,4], 2)); // 4 1 2 3
