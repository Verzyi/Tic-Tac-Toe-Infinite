import { useState } from "react";
import Square from "./square";
import "./board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xMoves, setXMoves] = useState<number[]>([]);
  const [oMoves, setOMoves] = useState<number[]>([]);
  const [oldestX, setOldestX] = useState<number | null>(null); // Track the oldest X piece
  const [oldestO, setOldestO] = useState<number | null>(null); // Track the oldest O piece
  const [winner, setWinner] = useState<string | null>(null); // Track the winner
  const [gameOver, setGameOver] = useState(false); // Track game over state

  const handleClick = (i: number) => {
    if (gameOver || winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    const currentMoves = xIsNext ? xMoves : oMoves;
    const nextMoves = [...currentMoves, i];

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    if (nextMoves.length === 4) {
      const oldestPieceIndex = currentMoves[0];
      newSquares[oldestPieceIndex] = null;

      if (xIsNext) {
        setOldestX(i);
        setXMoves(nextMoves.slice(1));
      } else {
        setOldestO(i);
        setOMoves(nextMoves.slice(1));
      }
    } else {
      xIsNext ? setXMoves(nextMoves) : setOMoves(nextMoves);
    }

    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
      setGameOver(true);
    }
  };

  const calculateWinner = (squares: string[]): string | null => {
    const lines = [
      // Horizontal lines
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal lines
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the winning symbol (either 'X' or 'O')
      }
    }

    return null; // Return null if there's no winner
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setXMoves([]);
    setOMoves([]);
    setOldestX(null);
    setOldestO(null);
    setWinner(null);
    setGameOver(false);
  };

  const renderSquare = (i: number) => {
    const isFirstMove = xIsNext
      ? xMoves.length === 3 && xMoves[0] === i
      : oMoves.length === 3 && oMoves[0] === i;
    const isOldestPiece = xIsNext ? oldestX === i : oldestO === i;
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        isFirstMove={isFirstMove}
        isOldestPiece={isOldestPiece && isFirstMove}
      />
    );
  };

  const winnerMessage = winner ? <p>Congratulations! {winner} wins!</p> : null;

  return (
    <div>
      <div className="board-row">{[0, 1, 2].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[3, 4, 5].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[6, 7, 8].map((i) => renderSquare(i))}</div>

      {winnerMessage && (
        <div
          className={`overlay ${gameOver ? "show" : ""}`}
          onClick={resetGame}
        >
          <div>{winnerMessage}</div>
          <div>Click anywhere to play again</div>
        </div>
      )}
    </div>
  );
};

export default Board;
