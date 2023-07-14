/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {
    
    let count = 0;
    let len = nums.length;
     
    for(let i=0; i<len; i++){
        if(nums[i] != 0){
            nums[count++] = nums[i];
        } 
    }
    
    while(count<len){
        nums[count++] = 0;
    }
    
};

var moveZeroes = function(nums) {
    
    let ptr = 0;
     
    for(let i in nums){
        if(nums[i] != 0){
            [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
            ptr++;
        } 
    }
    
};