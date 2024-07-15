import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from './Todo.jsx'
import NewTodoForm from './NewTodoForm.jsx'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = function({task}) {
        const newTodo = {task, key: uuid()}
        
        setTodos([...todos, newTodo])
    }
    
    const removeTodo = function(id) {
        const idx = todos.findIndex(todo => todo.key == id)
        if (idx > -1) {
            const newTodos = [...todos]
            newTodos.splice(idx, 1)
            setTodos(newTodos)
        }
    }
    
    return (<>
        <NewTodoForm addTodo={addTodo} />
        <ul>{todos.map(function ({task, key}) {
            return <Todo 
            task={task}
            key={key} id={key}
            removeTodo={removeTodo} />
        })}</ul>
    </>);
}

export default TodoList