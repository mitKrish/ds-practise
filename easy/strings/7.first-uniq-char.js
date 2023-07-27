var firstUniqChar = function(s) {
    
    let obj = {};
    
    for(let idx in s){
        obj[s[idx]] = obj[s[idx]] ? [...obj[s[idx]], ...idx] : [idx];
    }
    
    console.log(obj);
    
    for(let key in obj){
        console.log(key, obj[key]);
        if(obj[key].length == 1) return obj[key][0];
    }
    
    return -1;
};


var firstUniqChar = function(s) {
    const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i; 
    }
  }

  return -1; 
};

var firstUniqChar = function(s) {
    for(let index=0; index<s.length; index++){
        if(s.indexOf(s[index]) === s.lastIndexOf(s[index]))
            return index;
    };
    return -1
}