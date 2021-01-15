import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 3,
    ncols: 3,
    chance: 0.3,
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let wboard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      wboard[i] = [];
      for (let j = 0; j < this.props.ncols; j++) {
        wboard[i][j] = Math.random() > 0.3 ? true : false;
        console.log(wboard[i][j]);
      }
    }
    // wboard = [
    //   ["false", "false", "false"],
    //   ["false", "false", "true"],
    //   ["false", "true", "true"],
    // ];
    return wboard;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log("Flippin", coord);
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [x, y] = coord.split("-").map(Number);

    function flipCell(x, y) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nrows && y >= 0 && y < ncols) {
        board[x][y] = !board[x][y];
      }
    }
    flipCell(x, y);
    flipCell(x + 1, y);
    flipCell(x, y + 1);
    flipCell(x - 1, y);
    flipCell(x, y - 1);

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every((row) => row.every((cell) => !cell));

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      return (
        <div className="Winner">
          <span className="neon-orange"> You </span>
          <span className="neon-blue">Won!!</span>
        </div>
      );
    }
    let sendBoard = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[i][j]}
            flipCellsAround={() => this.flipCellsAround(coord)}
          />
        );
      }
      sendBoard.push(<tr key={i}>{row}</tr>);
    }
    console.log(sendBoard);
    return (
      // if the game is won, just show a winning msg & render nothing else
      // TODO
      // make table board
      // TODO
      <div>
        <div className="Board-title">
          <div className="neon-orange"> Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>{sendBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
