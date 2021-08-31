import fmt2json from 'format-to-json'
import React, { useState } from 'react'
import GrillBoard from '../Components/GrillBoard'
import TextArea from '../Components/TextArea'
import '../Styles/style.scss'
import {fillArray, make2dArray} from '../Utils/Index';


function App() {
    const [isValidJson, setIsValidJson] = useState(true)
    const [value, setValue] = useState("")
    const [grillDimensions, setGrillDimensions] = useState({})
    const [grill, setGrill] = useState([])



    const getGrillContent = async(element) =>{
        let value = element.target.value;
        let validJson = isValidJSONString(value)

        // Indent the JSON on textarea
        let fmtInfo = await fmt2json(value);
        setValue(fmtInfo.result)
        
        if(validJson){
            // Set the grill dimensions
            let dimensions = getDimensions(validJson,"grill")
            if(grill.length <= 0){
                let _grill = []; 
                _grill = make2dArray(_grill,dimensions.height,dimensions.width)
                setGrill(_grill)
            }
            setGrillDimensions(dimensions)
            if(grill.length > 0){
                let a = getBlocks(validJson.grill["grillItems"].sort((a,b)=>(b.width * b.height) - (a.width * a.height)))
                setGrill(a)
            }
        }
    }

    const getBlocks = (items)=>{
        // let _count = 0
        let _grill = [...grill]
        for(let i = 0; i < items.length; i++){
            for(let count = 1; count <= items[i].count; count++){
                // if(_count <=1){
                    _grill = fillArray(_grill,items[i],count)
                // }
                // _count++
            }
        }

        return _grill
    }


    const getDimensions = (obj,item) =>{
        let width = 0;
        let height = 0;
        Object.keys(obj).forEach(key=>{
            if(key === item){
                width = obj[key].width;
                height = obj[key].height
            }
        })
        return{height,width}
    }

    const isValidJSONString = (str) => {
        try {
            JSON.parse(str);
            setIsValidJson(true)
            return JSON.parse(str)
        } catch (e) {
            setIsValidJson(false)
            return false;
        }
    }

    return (
        <div id="app">
            <div id="header">
                <h3>Grill Master</h3>
            </div>
            
            <div id="main_content">
                <GrillBoard grill={grill}  height={grillDimensions.height} width={grillDimensions.width} />

                {/* <div className="two-col">
                    <div style={{height:`${grillDimensions?.height}px`,width:`${grillDimensions?.width}px`}} className="grill-container">
                        <ul id="main_grid" style={{gridTemplateColumns:`repeat(${grillDimensions.width / 10},10px)`, gridTemplateRows:`repeat(${grillDimensions.height / 10},10px)`}}>
                            {grillItems?.length > 0 && grillItems.map((item,index)=>{
                                return(
                                    <Items key={index}  item={item} />
                                )
                            })}
                        </ul>
                    </div>
                </div> */}


                <TextArea value={value} onChange={getGrillContent} className={isValidJson ? "textarea-success" : "textarea-error"} />
            </div>

        </div>
    )
}

export default React.memo(App)
