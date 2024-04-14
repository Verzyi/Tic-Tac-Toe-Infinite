import React from "react";
import "./square.css";

interface SquareProps {
  value: string;
  onClick: () => void;
  isFirstMove: boolean; // New prop to indicate if it's the first move of the player
  isOldestPiece: boolean; // New prop to indicate if it's the oldest piece of the player
}

const Square: React.FC<SquareProps> = ({
  value,
  onClick,
  isFirstMove,
  isOldestPiece,
}) => {
  const classes = `square ${value === "X" ? "X" : value === "O" ? "O" : ""} ${
    isFirstMove ? "transparent" : ""
  } ${isOldestPiece ? "blinking" : ""}`;

  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
