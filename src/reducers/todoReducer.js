import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, SELECT_ALL} from "../actions/todos";

export const initialState = [
    {id: 1, text: "Learn React", isCompleted: false},
    {id: 2, text: "Build a todo app", isCompleted: true},
    {id: 3, text: "Deploy to production", isCompleted: false},
];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter((item) => item.id !== action.payload);
        case TOGGLE_TODO:
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {...item, isCompleted: !item.isCompleted};
                }
                return item;
            });
        case SELECT_ALL:
            return state.map((item) => {
                return {...item, isCompleted: true};
            });
        default:
            return state;
    }
};

export default todosReducer;