const board = (() => {
    let _grid = new Array(9);
    const setCell = (player, index) =>{
        const html = document.getElementById(index);
        html.innerHTML = "X";
    }

    return {
        setCell
    };
})();
const player = (() =>{

});
const gameState = (() =>{

});