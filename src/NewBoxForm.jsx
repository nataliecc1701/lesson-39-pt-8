import { useState } from "react";
import './Box.css'

const NewBoxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        color: "aliceBlue",
        width: 100,
        height: 100,
    });
    
    const handleChange = function(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}))
    }
    
    return (<form onSubmit={(evt) => {
        evt.preventDefault()
        addBox(formData)
    }}>
        <label htmlFor="color">Color</label>
        <select name="color" onChange={handleChange}>
            <option value="aliceblue">Alice Blue</option>
            <option value="orangered">Orange-Red</option>
            <option value="turquoise">Turquoise</option>
            <option value="forestgreen">Forest Green</option>
            <option value="olivedrab">Olive Drab</option>
            <option value="slateblue">Slate Blue</option>
        </select> <br/>
        <label htmlFor="width">Width </label>
        <input name="width" type="number" defaultValue={100} onChange={handleChange} />
        <br />
        <label htmlFor="height">Height </label>
        <input name="height" type="number" defaultValue={100} onChange={handleChange} />
        <br />
        <input type="submit" />
    </form>)
}

export default NewBoxForm