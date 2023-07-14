/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

*/

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
     
     let sObj ={};
     let tObj = {};
     
     for(let i=0; i<s.length;i++){
         sObj[s[i]] = sObj[s[i]]+1 || 1;
         tObj[t[i]] = tObj[t[i]]+1 || 1;
     }
     
     //console.log(sObj, tObj);
     
     for(let i in sObj){
         if(sObj[i] != tObj[i]) return false
     }
     
     return true;
 
 };