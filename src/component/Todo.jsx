import React, { useEffect, useRef, useState } from 'react'
import { ListTodo, Plus } from 'lucide-react';
import TodoItems from './TodoItems';

const Todo = () => {

    const inputRef = useRef();
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const add = () => {
        //take the input entered by user
        const inputText = inputRef.current.value.trim();

        //if input feild is empty
        if(inputText === "") {
            return null;
        }
        
        //create a todo to add in todoList array
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
        };

        //added the todo in todoList Array
        setTodoList((prev) => [...prev, newTodo]);
        //after adding the todo in array make the input feild empty
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {

        //we delete a todo using this setTodoList function
        setTodoList((prevTodos) => {
            //the todo with the given id will be ignorred and rest of the todos in the list will be returned
            return prevTodos.filter((todo) => todo.id !== id); 
        })
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    },[todoList])
    
    return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl '>
        <div className='flex items-center mt-7 gap-2'>
            <ListTodo />
            <h1 className='text-3xl font-semibold'>Todo List</h1>
        </div>

        {/* -------- INPUT FEILD ----------- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input
                ref={inputRef}
                type="text" 
                placeholder='Add your task'
                className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
            />
            <button 
                onClick={add}
                className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
                    ADD+
            </button>
        </div>

        {/* ------------ Todo - List --------------- */}
        <div>
            {
                todoList.map((item, index) => {
                    return <TodoItems key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggle={toggle} />
                })
            }
        </div>
    </div>
  )
}

export default Todo