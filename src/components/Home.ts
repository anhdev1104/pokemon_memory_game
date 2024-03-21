const Home = () => {
    return `<div class="home">
        <div class="home-block">
            <h1>Pokemon memory game</h1>
            <form class="home-block-form" autocomplete="off" id="formStart">
                <label for="fullname">Nhập tên người chơi:</label>
                <input type="text" id="fullname" id="fullname">
                <span class="error-message"></span>
                <button type="submit" id="btnStartGame">Bắt đầu</button>
            </form>
        </div>
    </div>`;
};

export default Home;
