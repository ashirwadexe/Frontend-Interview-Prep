import React from 'react'
import { Circle, CircleCheck, Trash } from "lucide-react";

const TodoItems = ({text, id, deleteTodo, isCompleted, toggle}) => {
  return (
    <div className='flex justify-between py-1'>
        <div className='flex gap-2'>
            {
                isCompleted ? <CircleCheck className='text-orange-600' onClick={() => {toggle(id)}}/> : <Circle onClick={() => {toggle(id)}}/>
            }
            <p className={isCompleted ? `line-through text-orange-600` : ``}>{text}</p>
        </div>
        <Trash 
            onClick={() => (deleteTodo(id))}
            className='cursor-pointer hover:text-orange-600'
        />
    </div>
  )
}

export default TodoItems