import React from 'react';
import Square from './Square';

const Board = () => {
    const [squares, setSquares] = React.useState(Array(10).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);

    const winner = calculateWinner(squares);
    const status = winner ? `Winner Is ${winner}` : `Player ${isXNext ? 'X' : 'O'} Turn Now`;

    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) return;
        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
        // if (!isXNext && !calculateWinner(squares)) {
        //     const emptySquares = squares.filter((s) => s === null);
        //     const randomIndex = Math.floor(Math.random() * emptySquares.length);
        //     handleClick(emptySquares[randomIndex]);
        //   }
    };

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0'>
                <div className='w-[360px] bg-slate-600 rounded-2xl relative z-10'>
                    <div className="board-row w-full h-28 mb-1 flex gap-1">
                        <Square counter="1" value={squares[0]} onClick={() => handleClick(0)} />
                        <Square counter="2" value={squares[1]} onClick={() => handleClick(1)} />
                        <Square counter="3" value={squares[2]} onClick={() => handleClick(2)} />
                    </div>
                    <div className="board-row w-full h-28 mb-1 flex gap-1">
                        <Square counter="4" value={squares[3]} onClick={() => handleClick(3)} />
                        <Square counter="5" value={squares[4]} onClick={() => handleClick(4)} />
                        <Square counter="6" value={squares[5]} onClick={() => handleClick(5)} />
                    </div>
                    <div className="board-row w-full h-28  flex gap-1">
                        <Square counter="7" value={squares[6]} onClick={() => handleClick(6)} />
                        <Square counter="8" value={squares[7]} onClick={() => handleClick(7)} />
                        <Square counter="9" value={squares[8]} onClick={() => handleClick(8)} />
                    </div>
                </div>
                <div className="status mt-10 font-semibold text-2xl">{status}</div>
            </div>
        </>
    );
};

export default Board;