// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const targets = [];
    
    // read
    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(matrix[r][c] === 0) {
                // zero out the row
                for(let c0 = 0; c0 < matrix[0].length; c0++) {
                    if(matrix[r][c0] !== 0){
                       targets.push([r, c0]);
                    }
                }
                
                // zero out the column
                for(let r0 = 0; r0 < matrix.length; r0++) {
                    if(matrix[r0][c] !== 0){
                       targets.push([r0, c]);
                    }
                }
            }
        }
    }
    
    // write
    for(let i = 0; i < targets.length; i++) {
        const [r, c] = targets[i];
        
        matrix[r][c] = 0;
    }
};
