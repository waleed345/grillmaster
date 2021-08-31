export const make2dArray = (array,row,col) =>{
    row = row / 10;
    col = col / 10;
    for(let i= 0; i < row; i++){
        array.push([])
        for(let j=0; j < col; j++){
            array[i].push(0)
        }
    }
    return array
}

export const getHeightWidth = (array) =>{
    let height = array.length / 10
    let width = array[0].length / 10

    return{height,width}
}


export const loopArray = (rowStart,itemHeight,colStart,itemWidth, array,item,count) =>{
    
    let newArray = [...array]

    let rowEnd = rowStart + itemHeight
    let colEnd = colStart + itemWidth


    if(colEnd < array[0].length){
        for(let row = rowStart; row < rowEnd; row++){
            for(let col = colStart; col < colEnd; col++){
                newArray[row][col] = 1
            }
        }
    }else{
        if(colEnd > array[0].length){            

            rowStart = rowEnd
            rowEnd = rowStart + itemHeight
            colStart = colStart - itemWidth
            colEnd = colStart + itemWidth

            console.log(rowStart,rowEnd,colStart,colEnd,item)

            for(let row = rowStart; row < rowEnd; row++){
                for(let col = colStart; col < colEnd; col++){
                    newArray[row][col] = 3
                }
            }
        }else{
            
        }
    }
    
    return newArray
}

export const fillArray = (array,item,count) =>{
    let itemHeight = item.height / 10;
    let itemWidth = item.width / 10;

    let _array = [...array]

    innerLoop(item)

    function innerLoop(item){
        for(let row = 0; row < _array.length; row++){
            for(let col = 0; col < _array[row].length; col++){
                if(_array[row][col] == 0){
                    _array = loopArray(row,itemHeight,col,itemWidth,_array,item,count)
                    return
                }
            }
        }
    }

    return _array

}