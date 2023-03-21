import { Color, PieceSymbol, Square } from 'chess.js';

export interface BoardState {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[];
}
