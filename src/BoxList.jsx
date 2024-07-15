import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from './Box.jsx'
import NewBoxForm from './NewBoxForm.jsx'

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    
    const addBox = function({color, width, height}) {
        const newBox = {color, width, height, key: uuid()}
        
        setBoxes([...boxes, newBox])
    }
    
    const removeBox = function(id) {
        const idx = boxes.findIndex(box => box.key == id)
        if (idx > -1) {
            const newBoxes = [...boxes]
            newBoxes.splice(idx, 1)
            setBoxes(newBoxes)
        }
    }
    
    return (<>
        <NewBoxForm addBox={addBox} />
        {boxes.map(function ({color, width, height, key}) {
            return <Box 
            color={color}
            width={width}
            height={height}
            key={key} id={key}
            removeBox={removeBox} />
        })}
    </>);
}

export default BoxList