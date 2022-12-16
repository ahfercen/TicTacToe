const board = (() => {
    let _grid = new Array(9);
    let _cells = document.getElementsByClassName("cell");
    let _counter = 0;
    for (_counter; _counter<9;_counter++){
        _grid[_counter] = (_cells.item(_counter).children);
    }
    const setCell = (player, index) =>{
        const html = _grid[index];
        html[0].textContent = player.getSign();
    }
    const getCells = () =>{
        return _cells;
    }
    const resetBoard = () =>{
        console.log("reset board");
    }
    return {
        setCell,
        getCells,
        resetBoard,
    };
})();
const Player = (sign) =>{
    let _sign = sign;

    const getSign = (sign) =>{
        return _sign;
    }
    return {
        getSign,
    };
};
const gameState = (() =>{
    const _player1 = Player("X");
    const _player2 = Player("O")

    const _restart = document.getElementById("reset");
    _restart.onclick = (() =>{
        board.resetBoard();
    });
    const _cellClicked = e => {
        console.log(e.target);
    }
    Array.from(board.getCells()).forEach(element => {
        element.addEventListener("click",_cellClicked);
    });
    const _instruction = document.getElementById("instruction");
    _instruction.textContent = "Player 1 starts with X"
    _instruction.classList.remove("hidden");
})();