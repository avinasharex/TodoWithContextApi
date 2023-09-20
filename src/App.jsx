import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoContext from "./Context/TodoContext"
import { useReducer } from "react"
import TodoReducer from "./reducers/TodoReducer"
import TodoDispatchContext from "./Context/TodoDispatchContext"

function App() {
  //   const [list,setList] = useState([
  //     {id:1, todo: "todo1", finished: false},
  //     {id:2, todo: "todo2", finished: false}

  // ])
  const [list, dispatch] = useReducer(TodoReducer, [])
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
