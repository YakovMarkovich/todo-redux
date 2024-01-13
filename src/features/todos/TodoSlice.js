import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: 1, text: "Learn React", isCompleted: false},
    {id: 2, text: "Build a todo app", isCompleted: true},
    {id: 3, text: "Deploy to production", isCompleted: false}
]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.forEach((item) => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted;
                }
            })
        },
        selectAll: (state) => {
            state.forEach((item) => {
                item.isCompleted = true;
            });
        }
    }
})

export default todoSlice.reducer
export const {addTodo, deleteTodo, toggleTodo, selectAll} = todoSlice.actions