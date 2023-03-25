import { Color, PieceSymbol, Square } from 'chess.js';

export interface BoardState {
    chessBoard: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[];
    selectedPiece: Square | null;
    possibleMoves: string[];
    isCheckMate: boolean;
    isStaleMate: boolean;
    turn: Color;
}
