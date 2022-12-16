const board = (() => {
    let _grid = new Array(9);
    let _cells = document.getElementsByClassName("cell");
    const setCell = (player, index) =>{
        if(_grid[index]){
            return false;
        }
        const html = _cells.item(index).children;
        html[0].textContent = player.getSign();
        html[0].classList.remove("cell-content");
        html[0].classList.add("cell-filled");
        _grid[index] = player.getSign();
        return true;
    }
    const getCells = () =>{
        return _cells;
    }
    const resetBoard = () =>{
        _grid = new Array(9);
        for(let cell of _cells){
            cell.children[0].classList.remove("cell-filled");
            cell.children[0].classList.add("cell-content");
            cell.children[0].textContent = "";
        }
    }
    const checkWinner = () =>{
        console.log("Checking winner");
        return null;
    }
    return {
        setCell,
        getCells,
        resetBoard,
        checkWinner
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
    const _player2 = Player("O");
    let _currentPlayer = _player1;

    const _instruction = document.getElementById("instruction");
    _instruction.textContent = "Player 1 starts with X"
    _instruction.classList.remove("hidden");

    const _restart = document.getElementById("reset");
    _restart.onclick = (() =>{
        board.resetBoard();
        _currentPlayer = _player1;
        _instruction.textContent = `Player 1 with symbol ${_currentPlayer.getSign()}`
    });
    const _cellClicked = e => {
        if (board.setCell(_currentPlayer, e.target.id)){
            _nextTurn();
            board.checkWinner();
        }
    }
    Array.from(board.getCells()).forEach(element => {
        element.addEventListener("click",_cellClicked);
    
    });


    const _nextTurn = () =>{
        if(_currentPlayer == _player1){
            _currentPlayer = _player2;
            _instruction.textContent = `Player 2 with symbol ${_currentPlayer.getSign()}`

        }else{
            _currentPlayer = _player1;
            _instruction.textContent = `Player 1 with symbol ${_currentPlayer.getSign()}`
        }
    }
})();