import React from 'react'
import '../App.css'
import { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const Counter = () => {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);

    const intervalRef = useRef(null);

    //handling input from the user
    const handleInput = (event) => {
        setTime(parseInt(event.target.value * 60));
    };

    const formateTime = () => {
        const min = String(Math.floor(time/60)).padStart(2,'0');
        const sec = String(time%60).padStart(2, '0');

        return `${min}:${sec}`;
    };

    const handleStart = () => {
        setIsActive(true);
        setIsPause(false);
    };

    const hanldePause = () => {
        setIsPause(!isPause);
    };

    const hanldeReset = () => {
         clearInterval(intervalRef.current);
         setTime(0);
         setIsActive(false);
         setIsPause(false);
    };

    useEffect(() => {
        if(isActive && !isPause && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        }
        else if (time === 0) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            alert("Time is up !!!");
        }

        //cleanup function
        return () => clearInterval(intervalRef.current);
    }, [isActive, isPause, time]);

    return (
        <div className='countdown-timer'>
            <h1>Stopwatch</h1>

            <div className='timer-display'>
                <input 
                    type="number"
                    placeholder='Enter time in minutes'
                    onChange={handleInput}
                />
                <div>{formateTime()}</div>
            </div>

            <div className='timer-controls'>
                <button onClick={handleStart} disabled={isActive && !isPause}>Start</button>
                <button onClick={hanldePause}>{!isPause ? "Pause" : "Resume"}</button>
                <button onClick={hanldeReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter