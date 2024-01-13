import {useDispatch } from "react-redux";
import {deleteTodo, toggleTodo} from "../TodoSlice";

const TodoItem = ({ text, isCompleted, id}) => {
    const dispatch = useDispatch();

    return (
        <li className="todo-item">
            <input type="checkbox" checked={isCompleted} onChange={()=>dispatch(toggleTodo(id))} />
            <span>{text}</span>
            <div className="delete-todo" onClick={()=>dispatch(deleteTodo(id))}>Delete</div>
        </li>
    );
};

export default TodoItem;