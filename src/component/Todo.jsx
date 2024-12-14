import React, { useEffect, useRef, useState } from 'react'
import { List } from 'lucide-react';
import TodoItems from './TodoItems';

const Todo = () => {

    //we are using useRef to take the input from the input feild
    const inputRef = useRef();
    //with useState hook we are managing the states and local storage is helping in persisting the app
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    //add function -> adding todo in an array
    const add = () => {
        //storing the input from input feild in a variable
        const inputText = inputRef.current.value.trim();

        //if input felid is empty return null
        if(inputText === "") {
            return null;
        }

        //once we get the input from the input feild -> we create a new Todo object for that specific todo -> this will be creacted everytime we add a new todo
        const newTodo = {
            //assigning a unique id to each todo
            id: Date.now(),
            //storing inputTextt into a variable text
            text: inputText,
            //completed flag
            isCompleted: false
        };

        //here we are storing the todo into a prev array
        setTodoList((prev) => [...prev, newTodo]);

        //after adding the todo into our array we are making sure the input feild is cleaned
        inputRef.current.value = "";

    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        })
    };

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            });
        });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList]);


    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className='flex items-center gap-3'>
                <List className='size-10'/>
                <h1 className='text-4xl font-semibold'> To-Do List</h1>
            </div>

            {/* Input Feild */}

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input
                ref={inputRef}
                    type='text'
                    placeholder='Add a todo...'
                    className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                />
                <button
                onClick={add}
                    className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
                >
                    Add+
                </button>
            </div>

            {/* Todo List Area */}
            {
                todoList.map((item, index) => {
                    return <TodoItems key={index} text={item.text} deleteTodo={deleteTodo} id={item.id} toggle={toggle} isCompleted={item.isCompleted}/>
                })
            }
        </div>
    )
}

export default Todo