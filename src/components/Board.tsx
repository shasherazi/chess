import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from '../styles/Board.module.css';
import ChessSquare from './ChessSquare';

export default function Board() {
  const chessBoard = useSelector((state:RootState) => state.board.chessBoard);

  let pos = 0;

  return (
    <div className={styles.board}>
      <div className={styles.chessBoard}>
        {/* create a chess board using 1-8 a-h coordinates */}
        {
        Array.from(Array(8).keys()).map((row) => Array.from(Array(8).keys()).map((col) => {
          const id = `${String.fromCharCode(97 + col)}${8 - row}`;
          const color = (row + col) % 2 === 0 ? 'white' : 'black';
          const piece = chessBoard[pos]?.type;
          const pieceColor = chessBoard[pos]?.color;
          pos += 1;
          return (
            <ChessSquare
              id={id}
              color={color}
              key={id}
              piece={piece}
              pieceColor={pieceColor}
            />
          );
        }))
}
      </div>
    </div>
  );
}
