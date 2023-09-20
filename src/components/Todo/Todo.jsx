import { useState } from "react"

function Todo({todo, onFinish, onDelete, onEdit}) {
    const [finished,setFinished] = useState(false)
    const [isEditing,setIsEditing] = useState(false)
    const [editText,setEditText] = useState(todo)
  return (
    <div>
        <input type="checkbox" checked={finished} onChange={(e)=> {setFinished(e.target.checked)
        onFinish(e.target.checked)}}/>

        {(isEditing) ? <input type="text" value={editText} 
        onChange={e => setEditText(e.target.value)}/> : <span>{todo}</span>}
        <button onClick={()=>{
          setIsEditing(!isEditing)
          onEdit(editText)
        }}>{(!isEditing) ? 'Edit': 'Save'}</button>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo