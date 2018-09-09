var createIsland = function(grid, row, col) {
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
        return 0;
    }
    
    if(grid[row][col] == 0) {
        return 0;
    }
   
    grid[row][col] = 0;
    
    //recusive to scan up, down, right, left
    createIsland(grid,row+1,col);
    createIsland(grid,row-1,col);
    createIsland(grid,row,col+1);
    createIsland(grid,row,col-1);
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    for(let row = 0; row < grid.length; row ++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == 1) {
              islands += 1;
              createIsland(grid, row, col);
            }
        }
    }
    
    console.log(grid);
    
    return islands;
};
