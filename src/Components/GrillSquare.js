import React from 'react'

function GrillSquare(props) {
    const classes = `grill-square color-${props.color}`
    return (
        <div className={classes} />
    )
}

export default React.memo(GrillSquare)
