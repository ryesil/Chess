import React from "react";
import "./ChessBoard.css";
import {
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const ChessBoard = () => {
  let container = [];

  for (let i = 0; i < verticalAxis.length; i++) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const key = `${horizontalAxis[j]}${verticalAxis[i]}`;
      let icon;
      switch (key) {
        case "a1":
        case "h1":
          icon = faChessRook;
          break;
        case "c1":
        case "f1":
          icon = faChessBishop;
          break;
        case "b1":
        case "g1":
          icon = faChessKnight;
          break;
        case "d1":
          icon = faChessKing;
          break;
        case "e1":
          icon = faChessQueen;
          break;
        case "a2":
        case "b2":
        case "c2":
        case "d2":
        case "e2":
        case "f2":
        case "g2":
        case "h2":
          icon = faChessPawn;
          break;
      }
      switch (key) {
        case "a8":
        case "h8":
          icon = faChessRook;
          break;
        case "c8":
        case "f8":
          icon = faChessBishop;
          break;
        case "b8":
        case "g8":
          icon = faChessKnight;
          break;
        case "d8":
          icon = faChessKing;
          break;
        case "e8":
          icon = faChessQueen;
          break;
        case "a7":
        case "b7":
        case "c7":
        case "d7":
        case "e7":
        case "f7":
        case "g7":
        case "h7":
          icon = faChessPawn;
          break;
        default:
          break;
      }

      container.push(
        <span
          key={key}
          className={(i + j) % 2 === 0 ? "cell cell-even" : "cell cell-odd"}
        >
          {key}

          <FontAwesomeIcon
            className={key.charAt(1) > 6 ? "rook black" : "rook white"}
            icon={icon}
          />
        </span>
      );
    }
  }

  return <div className="board">{container}</div>;
};

export default ChessBoard;
