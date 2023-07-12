/**
 * 
 *  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
    
    Example 1:
    Input: nums = [2,2,1]
    Output: 1
 */

var singleNumber = function(nums) {
    let obj = {};
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]] == 1){
            sum = sum - nums[i];
            delete obj[nums[i]];
        }
        else{
            sum = sum + nums[i];
            obj[nums[i]] = 1;
        }
        
       // console.log(sum);
       // console.log(obj);
    }
    return sum;    
};

var singleNumber = function(nums) {
    let num=0
  for(let i=0;i<nums.length;i++){
       num=num^nums[i]
  }
  return num
};