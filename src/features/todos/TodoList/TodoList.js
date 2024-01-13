import { addTodo, selectAll } from "../TodoSlice";
import TodoItem from "../TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onAddTodo = () => {
        dispatch(addTodo({ id: uuidv4(), text: "test", isCompleted: false }));
    };

    const onSelectAll = () => {
        dispatch(selectAll());
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <TodoItem {...todo} />
                ))}
            </ul>
            <button onClick={onAddTodo}>Add todo</button>
            <button onClick={onSelectAll}>Select All</button>
        </div>
    );
};
export default TodoList;