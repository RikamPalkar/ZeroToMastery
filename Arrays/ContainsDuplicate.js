/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//[1,2,3,1]
//[1,2,3,1]
function  ContainsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                return true;
            }           
        }       
    }
    return false;
}

//console.log(ContainsDuplicate([1,2,2,3]));

function  ContainsDuplicateMap(nums) {
        const map = {};
        for(const num of nums) {
            // If we have seen this num before return true
            if(map[num]) return true
            else{
             map[num] = true
            }                
        }
        return false;
}

console.log(ContainsDuplicateMap([1,2,2,3]));