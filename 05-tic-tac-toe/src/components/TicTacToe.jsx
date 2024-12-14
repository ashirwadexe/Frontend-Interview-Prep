import React, { useState } from 'react';
import { Circle, X } from 'lucide-react';
import "../components/TicTacToe.css";

const TicTacToe = () => {
    // Set up the initial board (9 empty slots)
    const [board, setBoard] = useState(Array(9).fill("")); 
    const [turn, setTurn] = useState("X"); // X starts first
    const [winner, setWinner] = useState(null); // Track the winner of the game

    // Possible ways to win the game (rows, columns, diagonals)
    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Left diagonal
        [2, 4, 6], // Right diagonal
    ];

    // This function runs every time you click a box
    const handleClick = (index) => {
        if (board[index] !== "" || winner) {
            // If the box is already filled or we have a winner, do nothing
            return;
        }

        // Copy the board and update the box with "X" or "O"
        const newBoard = [...board];
        newBoard[index] = turn;

        // Update the board and switch the turn
        setBoard(newBoard);
        setTurn(turn === "X" ? "O" : "X");

        // Check if someone won
        checkWinner(newBoard);
    };

    // Check if someone won the game
    const checkWinner = (newBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]); // Set the winner (X or O)
                return;
            }
        }

        // Check if the board is full (no empty slots) and no winner
        if (!newBoard.includes("")) {
            setWinner("Draw");
        }
    };

    // Reset the game to start over
    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setTurn("X");
        setWinner(null);
    };

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe</h1>

            {/* Show the winner message */}
            {winner && (
                <h2 className="winner">
                    {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
                </h2>
            )}

            <div className="board">
                {board.map((value, index) => (
                    <div 
                        key={index} 
                        className="box" 
                        onClick={() => handleClick(index)} // Click on box
                    >
                        {value === "X" ? <X /> : value === "O" ? <Circle /> : ""}
                    </div>
                ))}
            </div>

            <button className="reset" onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default TicTacToe;
