import { useState } from "react"

function TodoReducer(state,action) {
    if(action.type === 'add_todo'){
        let todoText = action.payload.todoText
        return [
            ...state, {id: state.length+1, todo:todoText, finished:false}
          ]
      }
    else if(action.type === 'edit_todo'){
        let todo = action.payload.todo
        let todoText = action.payload.todoText
        const updatedList = state.map((t)=>{
            if(t.id === todo.id){
              t.todo = todoText
            }
            return t
          })
          return updatedList
    }else if(action.type === 'delete_todo'){
        let todo = action.payload.todo
        const updatedList = state.filter(t => t.id != todo.id )
        return updatedList
    }else if(action.type === 'change_finish'){
        const updatedList = list.map((t)=>{
          let isFinished = useState(false)
           if(t.id === todo.id){
             todo.finished = isFinished
           }
           return t
         })
         return updatedList
    }
  return (
    <div>TodoReducer</div>
  )
}

export default TodoReducer