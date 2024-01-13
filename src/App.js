import "./App.css";
import {Provider} from 'react-redux';
import store from "./app/store";
import TodoList from "./features/todos/TodoList/TodoList";

function App() {
    return <><Provider store={store}><TodoList/>
    </Provider></>;
}

export default App;