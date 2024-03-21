const Game = () => {
    return `
    
    <div class="game">
        <section class="game-control">
            <div class="game-control-wrap">
                <span>Xin chào player:</span>
                <span class="control-name"></span>
            </div>
            <div class="game-control-wrap">
                <button class="btn-reset">Chơi lại</button>
                <button class="btn-exit">Thoát</button>
            </div>
        </section>
        <section class="grid"></section>
    </div>`;
};

export default Game;
