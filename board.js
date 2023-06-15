class Board {
    constructor(){
        this.board = this.createBoard
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
          board.push(Array(8).fill(0));
        }
        return board;
    }
}