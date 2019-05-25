/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    return  handleEachCube(board) &&
            handleEveryRow(board) && 
            handleEveryColumn(board);
};


var handleEachCube = function(board) {
    let dict = {};
    for(var i = 0; i< board.length ; i++) {
        if(i % 3 === 1 && i != 1) { dict = {};}

        for(var c =0; c < 3 ; c++) {
            if(dict[board[i][c]] !== undefined) {
                return false;
            }
            if(board[i][c] !== '.'){
                dict[board[i][c]] = 1;
            }
        }
    }
    return true;
}

var handleEveryRow = function(board) {
    var dict = {};
    for(var i =0; i < board.length; i++) {
        
        for(var c=0; c< board[i].length; c++) {
            
            if(dict[board[i][c]] !== undefined) { 
                return false;
            }
            
            if(board[i][c] !== '.'){
                dict[board[i][c]] = 1;
            }
        }
        dict = {};
    }
        return true;
}

var handleEveryColumn = function(board) {
    var dict = {};
    
    for(var i =0; i < board.length; i++) {
        for(var c=0; c< board[i].length; c++) {
            
            if(dict[board[c][i]] !== undefined) { 
                return false;
            }
            if(board[c][i] !== '.'){
                dict[board[c][i]] = 1;
            }
        }
        dict = {};
    }
    
    return true;
}