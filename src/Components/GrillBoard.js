import React, { useState } from 'react'
import GrillSquare from './GrillSquare'

function GrillBoard({height,width,grill}) {
    const gridSquares = grill.map((rowArray, row) => {
        // map columns
        return rowArray.map((square, col) => {
            // Find the block x and y on the shape grid
            // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
            // const blockX = col - 0
            // const blockY = row - 0
            let color = square
            // Map current falling block to grid.
            // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
            // if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                // color = block[blockY][blockX] === 0 ? color : 3
            // }
            // Generate a unique key for every block
            const k = row * grill[0].length + col;
            // Generate a grid square
            return <GrillSquare key={k} color={color} />
        })
    })

    // <GrillSquare key={`${col}${row}`} color="1" />
    return (
        <div className='grill-board' style={{gridTemplateColumns:`repeat(${width/10},10px)`}}>
            {gridSquares}
        </div>
    )
}

export default React.memo(GrillBoard)
