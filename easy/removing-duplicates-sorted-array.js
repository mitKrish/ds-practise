var removeDuplicates = function(nums) {
    
    let val = nums[0];
    let ptr = 0;
    
    for(let i=1;i<nums.length;i++){
        if(nums[i] == val) continue;
        if(nums[i] > val) {
            ptr++;
            nums[ptr] = nums[i];
            val = nums[i];
        }
    }
    nums.length = ptr+1;
};

