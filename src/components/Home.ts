const Home = () => {
  return `<div class="home">
        <div class="home-block">
            <h1>Pokemon memory game</h1>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4MQDCTYKVhvI1isphQRGG3aRLIqlx4ZMQZblIlWQZpEuIc19V5l0i3gzVwuiMm0N1jXwtLC-6YH0L4D7-HHzA6aPRKONgFuBoKj0ufap8j89NuJIl1KrQKcyvx-T9k_jxdhzdWr5OvQ/s320/tumblr_mlqu0zsOu51qcb7k0o1_500.gif" />
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
