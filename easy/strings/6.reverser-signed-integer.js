var reverse = function(x) {
    let rem;
    let count = -1;
    let sign = Math.sign(x);
    console.log("sign", sign);
    if(sign) x = x * sign;
    let i = x; 
    console.log("x",x,"i", i);
    
    while(i>0){
        rem = i%10;
        i=Math.floor(i/10);
        count++;
    }
    
    let j = x;
    let k = 0;
    while(j>0){
        rem = j % 10;
        j = Math.floor(j/10);
        k = k + rem * Math.pow(10,count--);
    }
    
    console.log("k", k);
    
    return k * sign;   
};


var reverse = function(x) {
    let sign = Math.sign(x);
    if(sign) x = x * sign;
    console.log(sign, x);
    
    let k = x;
    let ans = 0;
    let rem;
    
    while(k>0){
        rem = k % 10;
        k = Math.floor(k/10);
        ans = (ans*10) + rem;
    }
    
    ans = ans * sign;
    
    if((ans< Math.pow(2,31)*-1) || (ans > Math.pow(2,31)-1)) return 0;
    else return ans;
    
};

/**
 * subtract num with rem, so that while check is (x!=0)
 * 
 */

var reverse = function(x) {
    var num=0;
    while(x!=0)
    {
        var temp=x%10;
        num=num*10+temp;
        x=(x-temp)/10;
    }
    if (num < -2147483648 || num > 2147483647)
        {
            return 0;
        }
    return num;
    
};