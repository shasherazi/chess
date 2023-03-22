import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import styles from '../styles/Board.module.css';
import ChessSquare from './ChessSquare';
import { resetGame } from '../redux/board/boardSlice';

export default function Board() {
  const dispatch = useDispatch();
  const chessBoard = useSelector((state:RootState) => state.board.chessBoard);
  const isCheckMate = useSelector((state:RootState) => state.board.isCheckMate);
  const turn = useSelector((state:RootState) => state.board.turn);

  let pos = 0;

  return (
    <div className={styles.board}>
      <div className={`${styles.chessBoard} ${isCheckMate ? styles.checkMateBoard : ''}`}>
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
      {
          isCheckMate && (
          <div className={styles.checkMate}>
            <div className={styles.checkMateText}>
              <h1>Check Mate</h1>
              <h2>
                {turn === 'w' ? 'Black' : 'White'}
                {' '}
                wins
              </h2>
            </div>
            <Link to="/chess/board" className={styles.playAgain} onClick={() => dispatch(resetGame())}>Play Again</Link>
          </div>
          )
      }
    </div>
  );
}
