import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState({
        task: ""
    });
    
    const handleChange = function(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}))
    }
    
    return (<form onSubmit={(evt) => {
        evt.preventDefault()
        addTodo(formData)
        setFormData({task: ""})
    }}>
        <label htmlFor="task">Task </label>
        <input name="task" type="text" placeholder="Enter Task Here" value={formData.task} onChange={handleChange} />
        <br />
        <input type="submit" />
    </form>)
}

export default NewTodoForm