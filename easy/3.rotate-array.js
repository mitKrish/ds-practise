var rotate = function(nums, k) {
    
    //   let reverseArr = nums.map((elem,idx)=> nums[nums.length-1-idx]);
       
       //console.log(reverseArr);
       
       if(k > nums.length) k = k % nums.length;
       console.log("k",k);
       
       reverse(nums,0, nums.length);
       console.log("nums", nums);
       reverse(nums,0,k);
       console.log("first", nums);
       reverse(nums,k,nums.length);
       console.log("second", nums); 
   };
   
   function reverse(arr, str, end){
       if(end>arr.length) end = arr.length;
       console.log("str", str, "end", end);
       for(let i = str; i <(str+end)/2; i++){
           console.log(arr);
           [arr[i], arr[str + end-1-i]] = [ arr[str + end-1-i], arr[i]]
       }
   }

   function reverse(arr, str, end){
    while(str<end){
        [arr[str],arr[end]] = [arr[end],arr[str]]
        str++;
        end--;
    }
     
}