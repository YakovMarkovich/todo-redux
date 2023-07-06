export const ADD_TODO = "ADD_TODO"

export const addTodo = (todo) => {
    return { type: ADD_TODO, payload: todo };
};

export const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (todo) => {
    return {type: DELETE_TODO, payload: todo}
}

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = (todo) => {
    return {type: TOGGLE_TODO, payload: todo}

}

export const SELECT_ALL = "SELECT_ALL";

export const selectAll = () => {
    return {type: SELECT_ALL}

}