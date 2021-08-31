import React from 'react'

function Items({className,item}) {

    return (
        Array.apply(null, { length: item.count }).map((e, i) => (
            <li key={i+`${item.title}`} className={className?? ""} style={{height:(`${item?.height}px`),width:`${item?.width}px`}}>
                <p>{item.title}</p>
            </li>
        ))
    )
}

export default Items
