var reverseString = function(s) {
    
    for(let i=0;i<s.length/2;i++){
        [s[i],s[s.length-1-i]] = [s[s.length-1-i], s[i]];
    }
    
};

var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    let temp
    
    while (i < j) {
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        
        i++
        j--
    }
};

var reverseString = function(s) {
    let i=0;
    let j=s.length-1;
    
    while(i<j){
        [s[i],s[j]] = [s[j],s[i]];
        i++;
        j--;
    }
    
};