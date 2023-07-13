/**
 *  
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

var twoSum = function(nums, target) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        obj[nums[i]] = i;
    }
    
    //console.log(obj);
    
    for(let i=0; i<nums.length; i++){
      //  console.log(obj[target-nums[i]], i);
        if(obj[target-nums[i]] && obj[target-nums[i]] != i) return [i, obj[target-nums[i]]];
    }
    
};

var twoSum = function(nums, target) {
    let obj = {};
    
    for(let i=0; i<nums.length; i++){
        let comp = target-nums[i];
        if(comp in obj) return [i, obj[comp]];
        else obj[nums[i]] = i;
    }
    
    return [];
};