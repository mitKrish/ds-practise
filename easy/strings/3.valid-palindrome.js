/**
 * Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */

var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/gi,"");
   return s == s.split("").reverse().join("");   
};

//palindrome check 1
let t = "canal";
l = t.length;  
for (let i = 0; i < t.length; i++) {
    if (t[i] !== t[l - (i + 1)]) return false;
}
return true;

//palindrome check 2
let left = 0
    let right = s.length - 1
    if(s.length == 0) return true
    if (s.length == 2) return s[0] == s[1]
    while (left < right) {
        if(s[left] != s[right] ) {
           
             return false
        }
            left++;
            right--
          
     
        
    }
    return true

//Without any built-in functions:

var isPalindrome = function(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if (toLowerCase(s) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}