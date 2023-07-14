/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. 

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

*/
function check(arr){
    let set;
    console.log(arr);
    arr = arr.filter(ele => ele !=".");
    set = [...new Set(arr)];
    console.log(arr.length, set.length);
    if(arr.length != set.length) return false;
    return true;
}

function checkRows(board){
    console.log("rows");
     for(let i=0; i<9;i++){
        if(!check(board[i])) return false;
    }
    return true;
}

function checkCols(board){
    console.log("cols");
    let col;
    for(let j=0; j<9;j++){
        col =[];
        for(let i=0;i<9;i++){
            col.push(board[i][j]);
        }
        if(!check(col)) return false;
    }
    return true;
}

function checkSqrs(board){
    console.log("sqrs");
    let sqr;
    
    for(let i=0; i<9;i=i+3){
        for(let j=0;j<9; j=j+3){
            sqr =[];
            for(let a=i; a<i+3; a++){
                for(let b=j; b<j+3;b++){
                    sqr.push(board[a][b]);
                }
            }
            if(!check(sqr)) return false;
        }
    }
    return true;
}

var isValidSudoku = function(board) {
    if(!checkRows(board)) return false;
    if(!checkCols(board)) return false;
    if(!checkSqrs(board)) return false;
    
    return true;
};


//Solution 2:

var isValidSudoku = function(board) {
    const rowSet = new Set()
    const colSet = new Set()
    const boxSet = new Set()

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const rowNumber = board[i][j]
            const colNumber = board[j][i]
            const boxNumber = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][(i * 3) % 9 + (j % 3)] //check this calculation
        
            if(rowNumber !== '.') {
                if(rowSet.has(rowNumber)) return false

                rowSet.add(rowNumber)
            }

            if(colNumber !== '.') {
                if(colSet.has(colNumber)) return false

                colSet.add(colNumber)
            }

            if(boxNumber !== '.') {
                if(boxSet.has(boxNumber)) return false

                boxSet.add(boxNumber)
            }
        }

        rowSet.clear()
        colSet.clear()
        boxSet.clear()
    }

    return true
}
