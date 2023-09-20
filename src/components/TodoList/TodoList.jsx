import React, { useContext } from 'react'
import Todo from '../Todo/Todo'
import TodoContext from '../../Context/TodoContext'
import TodoDispatchContext from '../../Context/TodoDispatchContext'
function TodoList() {
  const {list} = useContext(TodoContext)
  const {dispatch} = useContext(TodoDispatchContext)

  function onEdit(todo,todoText){
      dispatch({type: 'edit_todo', payload: {todo,todoText}})
  }
  function onDelete(todo){
    dispatch({type: 'delete_todo', payload: {todo}})
  }
  function onFinish(){
    dispatch({type: 'change_finish', payload: {isFinished}})
  }
  return (
    <div>{list.length > 0 && list.map(todo => <Todo
      key={todo.id}
      todo={todo.todo}
      isFinished={todo.finished}
      id={todo.id}
        
      onDelete = {()=>onDelete(todo)}
      onEdit={(todoText)=>onEdit(todo,todoText)}
      onFinish={()=>onFinish}
    ></Todo>)}</div>
  )
}

export default TodoList