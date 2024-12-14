
import { Circle, CircleCheck, Trash2 } from 'lucide-react'
import React from 'react'

const TodoItems = ({text, deleteTodo, id, toggle, isCompleted}) => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-2 text-xl items-center mb-3'>
            {
                isCompleted ? <CircleCheck className='text-orange-600' onClick={() => {toggle(id)}}/> : <Circle onClick={() => {toggle(id)}} />
            }
            <p className={`${isCompleted ? "line-through text-orange-600" : ""}`}>{text}</p>
        </div>
        <Trash2 onClick={() => (deleteTodo(id))}/>
    </div>
  )
}

export default TodoItems