import React from 'react'

function TextArea({id,className,onChange,value}) {
    
    const onTextChange=(e)=>{
        onChange ?  onChange(e) : console.log("console from textarea component",e.target)
    }

    return (
       <div id="textarea_comp">
           <textarea value={value?? ""} onChange={e=>onTextChange(e)} id={id} className={className}></textarea>
       </div>
    )
}

export default TextArea
