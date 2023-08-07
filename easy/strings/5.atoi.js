var myAtoi = function(s) {
    s = s.replace(/[^0-9+-]/gi,"");
    return parseInt(s);
};