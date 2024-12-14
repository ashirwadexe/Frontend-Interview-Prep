// import Square from './Square'
// import React, { useState } from 'react'

// const Board = () => {
//     const [state, setState] = useState(Array(9).fill(null));
//     const [isXTurn, setIsXTurn] = useState(true);

//     const checkWinner = () => {
//         const winnerLogic = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];

//         for(let logic of winnerLogic) {
//             //distructuring the array
//             const [a, b, c] = logic; 
//             //checking for winner
//             if(state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
//                 //condition true then return true that winner is found
//                 //return true;

//                 //instead of returning true -> return who won the game
//                 return state[a];
//             }
//         }

//         return false;
//     }

//     const isWinner = checkWinner(); 
 
//     const handleClick = (index) => {
//         if(state[index] !== null) {
//             return;
//         }
//         //here we are taking the prev state of the box clicked
//         const copyState = [...state];
//         //here we are checking isXTurn true h ya false, if true box will get X else O
//         copyState[index] = isXTurn ? "X" : "O";
//         //ye jo new State h box ka use h upadte kr rhe suing setState function
//         setState(copyState); 
//         //toggling the turn of isXTurn state
//         setIsXTurn(!isXTurn);
//     }

//     const handleReset = () => {
//         setState(Array(9).fill(null));
//     }

    

//   return (
//     <div className='board-container'>
//         <h1 style={{fontSize: "2rem", display: "flex", justifyContent: 'center'}}>Tic Tac Toe</h1>
//         {/* RENDERING WHO WON THE GAME EVERYTIME STATE IS CHANGED */}
//         {
//             isWinner ? (
//                 <><h4 style={{display: "flex", justifyContent: 'center'}}>{isWinner} won the game <button onClick={handleReset}>Play Again</button> </h4></>
//             ) : (
//                 <></>
//             )
//         }
//         <div className='board-row'>
//             {/* here value={state[0]} is the value of each box and onclick handling the click event on each box */}
//             <Square onClick={() => handleClick(0)} value={state[0]}/>
//             <Square onClick={() => handleClick(1)} value={state[1]}/>
//             <Square onClick={() => handleClick(2)} value={state[2]}/>
//         </div>
//         <div className='board-row'>
//             <Square onClick={() => handleClick(3)} value={state[3]}/>
//             <Square onClick={() => handleClick(4)} value={state[4]}/>
//             <Square onClick={() => handleClick(5)} value={state[5]}/>
//         </div>
//         <div className='board-row'>
//             <Square onClick={() => handleClick(6)} value={state[6]}/>
//             <Square onClick={() => handleClick(7)} value={state[7]}/>
//             <Square onClick={() => handleClick(8)} value={state[8]}/>
//         </div>
//     </div>
//   )
// }

// export default Board


//---------------------------------
//-----------Part 2----------------
//---------------------------------

// import React, { useState } from 'react'
// import Square from './Square'

// const Board = () => {

//     const [state, setState] = useState(Array(9).fill(null));
//     const [isXTurn, setIsXTurn] = useState(true);

//     const handleClick = (index) => {
//         if(state[index] !== null) {
//             return;
//         }
//         const copyState = [...state];
//         copyState[index] = isXTurn ? "X" : "O";
//         setState(copyState);
//         setIsXTurn(!isXTurn);
//     }

//     const checkWinner = () => {
//         const winnerLogic = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];

//         for(let logic of winnerLogic) {
//             const [a, b, c] = logic;
//             if(state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
//                 return state[a];
//             }
//         }

//         return false;
//     };

//     const checkDraw = () => {
//         // Check if all cells are filled and no winner is found
//         return state.every((cell) => cell !== null) && !isWinner();
//     };

//     const isWinner = checkWinner();
//     const isDraw = checkDraw();

//     const handleReset = () => {
//         setState(Array(9).fill(null));
//         setIsXTurn(true);
//     }

//     return (
//         <div className='board-container'>
//             <h1 style={{display: "flex", justifyContent: "center"}}>Tic Tac Toe</h1>
//             {isWinner ? (
//                 <>
//                     <h3 style={{display: "flex", justifyContent: "center"}}>{isWinner} won the game <button style={{marginLeft: "20px"}} onClick={handleReset}>Play Again</button></h3>
//                 </>
//             ) : isDraw ? (
//                 <>
//                     <h3 style={{display: "flex", justifyContent: "center"}}>It's a draw! <button style={{marginLeft: "20px"}} onClick={handleReset}>Play Again</button></h3>
//                 </>
//             ) : (
//                 <>
//                     <h2 style={{display: "flex", justifyContent: "center"}}>{isXTurn ? "X" : "O"} your turn</h2>
//                     <div className='board-row'>
//                         <Square onClick={() => handleClick(0)} value={state[0]}/>
//                         <Square onClick={() => handleClick(1)} value={state[1]}/>
//                         <Square onClick={() => handleClick(2)} value={state[2]}/>
//                     </div>
//                     <div className='board-row'>
//                         <Square onClick={() => handleClick(3)} value={state[3]}/>
//                         <Square onClick={() => handleClick(4)} value={state[4]}/>
//                         <Square onClick={() => handleClick(5)} value={state[5]}/>
//                     </div>
//                     <div className='board-row'>
//                         <Square onClick={() => handleClick(6)} value={state[6]}/>
//                         <Square onClick={() => handleClick(7)} value={state[7]}/>
//                         <Square onClick={() => handleClick(8)} value={state[8]}/>
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }

// export default Board



import React, { useState } from 'react'
import Square from './Square'
import { CheckCheck } from 'lucide-react';

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index) => {
        if(state[index] !== null) {
            return;
        }
        console.log("clicked: ", index);
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn)
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let logic of winnerLogic) {
            const [a, b, c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    };

    const checkDraw = () => {
        return state.every((cell) => cell !== null) && !isWinner;
    }
    
    const isWinner = checkWinner();
    const isDraw = checkDraw();

    const handleReset = () => {
        setState(Array(9).fill(null));
        setIsXTurn(true);
    }

    return (
        <div className='board-container'>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    flexDirection: "column"
                }}
            >
                <h1>Tic Tac Toe</h1>
            </div>

            {
                isWinner ? (
                    <>
                        <h3 style={{display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
                            {isWinner} won the game.
                            <br />
                            <button onClick={handleReset}>Play Again</button>
                        </h3>
                    </>

                ) : isDraw ? (
                    <>
                        <h3 style={{display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
                            It's a Draw.
                            <br />
                            <button onClick={handleReset}>Play Again</button>
                        </h3>
                    </>
                ) : (
                    <>
                        <h3
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                            }}
                        >
                            Your turn - {isXTurn ? "X" : "O"}
                        </h3>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(0)} value={state[0]}/>
                            <Square onClick={() => handleClick(1)} value={state[1]}/>
                            <Square onClick={() => handleClick(2)} value={state[2]}/>
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(3)} value={state[3]}/>
                            <Square onClick={() => handleClick(4)} value={state[4]}/>
                            <Square onClick={() => handleClick(5)} value={state[5]}/>
                        </div>
                        <div className='board-row'>
                            <Square onClick={() => handleClick(6)} value={state[6]}/>
                            <Square onClick={() => handleClick(7)} value={state[7]}/>
                            <Square onClick={() => handleClick(8)} value={state[8]}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Board