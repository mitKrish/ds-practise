// save initial value and pointer
// if current and next values are equal, continue
// if current value > value
//      increment pointer
//      insert current value in pointed index.
//      update current value as value.     

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

