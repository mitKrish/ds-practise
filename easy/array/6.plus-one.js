/**
 * 
 *  Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].
 */


var plusOne = function(digits) {
    if(digits[digits.length-1]<9){
        digits[digits.length-1] = digits[digits.length-1] + 1;
        return digits
    } else {
        let carryover = 0;
        if(digits[digits.length-1] == 9){
            digits[digits.length-1] = 0;
            carryover = 1;
        }
        for(let i= digits.length-2; i>-1; i--){
            if(digits[i] == 9 && carryover == 1){
                digits[i] = 0;
                carryover = 1;
            } else {
                digits[i] = digits[i] + carryover;
                carryover = 0;
            }
        } 
        if(carryover == 1) digits.unshift("1");
    }
    return digits;
};