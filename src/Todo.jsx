import './Todo.css';

const Todo = ({task, id, removeTodo}) => {
    return <li 
        id={id} className="Todo">{task}
        <button className="Todo-button" onClick={() => {removeTodo(id)}}>x</button></li>
}

export default Todo