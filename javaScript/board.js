class Board {
    constructor(){
        this.board = this.createBoard
    }

    createBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
          board.push(Array(8).fill(0));
        }
        const setUpBoard = [
        ["r","n","b","q","k","b","n","r"],
        ["p","p","p","p","p","p","p","p"],
        ["0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0"],
        ["0","0","0","0","0","0","0","0"],
        ["P","P","P","P","P","P","P","P"],
        ["R","N","B","Q","K","B","N","R"]]
        return board;
    }

    renderBoard(){
        print("weeewooo")
    }
}
export {Board}