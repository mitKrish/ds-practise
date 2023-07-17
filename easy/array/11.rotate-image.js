var rotate = function(matrix) {
    
    let len = matrix[0].length;

    //transpose matrix
    for(let i=0;i<len; i++){
        for(let j=i;j<len;j++){
            [matrix[i][j], matrix[j][i]] =  [matrix[j][i],matrix[i][j]]
        }
    }

    console.log(matrix);
    
    //reverse rows in matrix
    for(let i in matrix){
        matrix[i].reverse();
    }
};