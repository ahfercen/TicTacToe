const board = (() => {
    let _grid = new Array(9);
    const cells = document.getElementsByClassName("cell");
    let _counter = 0;
    for (_counter; _counter<9;_counter++){
        _grid[_counter] = (cells.item(_counter).children);
    }

    const setCell = (player, index) =>{
        const html = _grid[index];
        html[0].textContent = player.getSign();
    }

    return {
        setCell
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

    console.log(_player1.getSign());
    console.log(_player2.getSign());
})();