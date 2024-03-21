const initializeGame = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const formStart: HTMLElement | null = document.querySelector('#formStart');
        const input: HTMLElement | any = document.querySelector('#fullname');
        const errorMessage: HTMLElement | any = document.querySelector('.error-message');

        input.oninput = function () {
            this.classList.remove('error');
            errorMessage.textContent = '';
        };

        input.onblur = function () {
            if (this.value === '') {
                this.classList.add('error');
                errorMessage.textContent = 'Vui lòng nhập vào tên của bạn !';
            }
        };

        formStart?.addEventListener('submit', e => {
            e.preventDefault();

            const playerName: string = input.value;
            if (playerName === '') {
                input.classList.add('error');
                errorMessage.textContent = 'Tên người chơi không được để trống !';
            } else {
                localStorage.setItem('player', JSON.stringify(playerName));
                window.location.href = '/game';
            }
        });
    });
};

export default initializeGame;
