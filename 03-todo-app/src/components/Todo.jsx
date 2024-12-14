import React from 'react'
import { List } from "lucide-react";
import TodoItems from './TodoItems';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Todo = () => {

    const inputRef = useRef();
    const [todo, setTodo] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const addTodo = () => {
        const inputText = inputRef.current.value.trim();
        
        if(inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        };

        setTodo((prev) => [...todo, newTodo]); 
        inputRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodo((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };

    const toggle = (id) => {
        setTodo((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo]);

    return (
        <div className=' bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className='flex items-center gap-2'>
                <List size={32}/>
                <h1 className='text-4xl font-semibold'>To-Do List</h1>
            </div>

            {/* INPUT FEILD */}

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='Add a to-do...'
                    className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                />
                <button
                    onClick={addTodo}
                    className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
                >
                    Add+
                </button>
            </div>

            {/* INPUT ITEMS */}
            <div>
                {
                    todo.map((item, index) => {
                        return <TodoItems key={index} text={item.text} id={item.id} deleteTodo = {deleteTodo} toggle={toggle} isCompleted={item.isCompleted}/>
                    })
                }
            </div>
        </div>
    )
}

export default Todo