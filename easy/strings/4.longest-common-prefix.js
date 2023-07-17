var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let common = "";
    let first = strs[0];
    
    for(let i=0; i<first.length;i++){
        for(let st =1; st<len;st++){
            if(first[i] !== strs[st][i]) return common;
        } 
        common = common + first[i];
    }
    
    return common;
    
};

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i =1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1)
        if(!prefix){
            return ""
        }
        }
    }
    return prefix;
};

//check more solutions.