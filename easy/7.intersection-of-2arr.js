/**
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
    Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]
 */

function createObj(nums){
    let obj = {};
    for(let i=0; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    }
    return obj;
}


var intersect = function(nums1, nums2) {
    let obj1 = createObj(nums1);
    let obj2 = createObj(nums2);
    
    let count = [];
    
    for(let key in obj1){
        if(obj1[key] && obj2[key]){
            let countVal = obj1[key]>obj2[key] ? obj2[key] : obj1[key];
            count = [...count,...new Array(countVal).fill(key)];
        }
    }
    
    return count;
};


var intersect = function(nums1, nums2) {
    if (nums1.lenth > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    
    const map = {}
    const result = []
    
    for (const num of nums1) {
        map[num] = map[num] + 1 || 1
    }
    
    for (const num of nums2) {
        if (num in map && map[num] > 0) {
            result.push(num)
            map[num]--
        }
    }
    
    return result
};