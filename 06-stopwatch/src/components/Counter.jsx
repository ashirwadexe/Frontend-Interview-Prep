// import React, { useState, useRef, useEffect } from 'react';
// import '../App.css';

// const Counter = () => {

//     const [time, setTime] = useState(0); // Time in seconds
//     const [isActive, setIsActive] = useState(false); // Timer running state
//     const [isPaused, setIsPaused] = useState(false); // Timer pause state
//     const intervalRef = useRef(null); // Reference to interval ID

//     // Handle input from the user and set time in seconds
//     const handleInput = (event) => {
//         const input = parseInt(event.target.value, 10);
//         if (!isNaN(input) && input > 0) {
//             setTime(input * 60);
//         }
//     };

//     // Format time as MM:SS
//     const formatTime = () => {
//         const minutes = String(Math.floor(time / 60)).padStart(2, '0');
//         const seconds = String(time % 60).padStart(2, '0');
//         return `${minutes}:${seconds}`;
//     };

//     // Start the countdown
//     const handleStart = () => {
//         if (!isActive) {
//             setIsActive(true);
//             setIsPaused(false);
//         }
//     };

//     // Pause or resume the countdown
//     const handlePauseResume = () => {
//         setIsPaused((prev) => !prev);
//     };

//     // Reset the countdown
//     const handleReset = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null; 
//         setTime(0);
//         setIsActive(false);
//         setIsPaused(false);
//     };

//     // Countdown logic
//     useEffect(() => {
//         if (isActive && !isPaused && time > 0) {
//             intervalRef.current = setInterval(() => {
//                 setTime((prevTime) => {
//                     if (prevTime <= 1) {
//                         clearInterval(intervalRef.current);
//                         intervalRef.current = null;
//                         setIsActive(false);
//                         alert("Time is up !!!");
//                         return 0;
//                     }
//                     return prevTime - 1;
//                 });
//             }, 1000);
//         } 

//         // Cleanup function to clear interval on component unmount or state change
//         return () => clearInterval(intervalRef.current);
//     }, [isActive, isPaused]);

//     return (
//         <div className='countdown-timer'>
//             <h1>Countdown Timer</h1>

//             <div className='timer-display'>
//                 <input 
//                     type="number" 
//                     placeholder='Enter time in minutes' 
//                     onChange={handleInput} 
//                     disabled={isActive} 
//                 />
//                 <div>{formatTime()}</div>
//             </div>

//             <div className='timer-controls'>
//                 <button onClick={handleStart} disabled={isActive && !isPaused}>Start</button>
//                 <button onClick={handlePauseResume} disabled={!isActive}>{!isPaused ? "Pause" : "Resume"}</button>
//                 <button onClick={handleReset}>Reset</button>
//             </div>
//         </div>
//     );
// };

// export default Counter;


import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef();

    const inputHandler = (event) => {
        const input = parseInt(event.target.value);
        if(!isNaN(input) && input >= 1) {
            setTime(input * 60);
        }
    };

    const formateTime = () => {
        const min = String(Math.floor(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');

        return `${min}:${sec}`;
    };

    const handleStart = () => {
        if(!isActive) {
            setIsActive(true);
            setIsPaused(false);
        }
    };

    const handlePauseResume = () => {
        setIsPaused((prev) => !prev);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setIsActive(false);
        setIsPaused(false);
    }

    //countdown logic -> main part
    useEffect(() => {
        if(isActive && !isPaused && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if(prevTime <= 0) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setIsActive(false);
                        alert("Time is Up!!!");
                        return 0;
                    }
                    return prevTime - 1;
                })
            }, 1000);
        }
        
        return () => clearInterval(intervalRef.current);
    }, [isActive, isPaused])

    return (
        <div className='countdown-timer'>
            <h1>Countdown Timer</h1>

            <div className='timer-display'>
                <input
                    type="number"
                    placeholder='Enter time in minutes...' 
                    onChange={inputHandler}
                />
                <div>{formateTime()}</div>
            </div>

            <div className='timer-controls'>
                <button onClick={handleStart} disabled={isActive}>Start</button>
                <button onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
