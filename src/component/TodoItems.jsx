import { Circle, CircleCheck, ShieldX, Trash } from 'lucide-react'
import React from 'react'

const TodoItems = ({text, id, isCompleted, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center gap-2'>
            {
                isCompleted ? <CircleCheck onClick={() => {toggle(id)}}/> : <Circle onClick={() => {toggle(id)}}/>
            }
            <p className={`text-slate-700 text-xl ${isCompleted ? "line-through" : ""}`}>{text}</p>
        </div>
        <Trash onClick={() => {deleteTodo(id)}} />
    </div>
  )
}

export default TodoItems