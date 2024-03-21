const handleLogicGame = () => {
    document.addEventListener('DOMContentLoaded', async () => {
        interface Card {
            name: string;
            img: string;
        }

        const cardsArray: Card[] = [
            { name: 'fire', img: './src/img/fire.png' },
            { name: 'youtube', img: './src/img/youtube.png' },
            { name: 'flash', img: './src/img/flash.png' },
            { name: 'gift', img: './src/img/gift.png' },
            { name: 'tron', img: './src/img/tron.png' },
            { name: 'ufo', img: './src/img/ufo.png' },
            { name: 'plant', img: './src/img/plant.png' },
            { name: 'burger', img: './src/img/burger.png' },
        ];

        let previousCard: HTMLElement | null = null;
        let count: number = 0;
        let firstGuess: string = '';
        let secondGuess: string = '';
        const delay: number = 500;
        const grid: HTMLElement | null = document.querySelector('.grid');
        const btnResetGame: HTMLElement | null = document.querySelector('.btn-reset');
        const btnExitGame: HTMLElement | null = document.querySelector('.btn-exit');
        let playerName: HTMLElement | null = document.querySelector('.control-name');

        const storedName = localStorage.getItem('player');
        if (playerName && storedName) {
            playerName.textContent = JSON.parse(storedName);
        }

        const cardsArrayMerge: Card[] = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5);

        cardsArrayMerge.forEach(item => {
            const card: HTMLDivElement = document.createElement('div');
            card.classList.add('card');
            card.dataset.name = item.name;

            const front: HTMLDivElement = document.createElement('div');
            front.classList.add('front');

            const back: HTMLDivElement = document.createElement('div');
            back.classList.add('back');
            back.style.backgroundImage = `url(${item.img})`;

            card.appendChild(front);
            card.appendChild(back);

            grid?.appendChild(card);
        });

        function matchingCard(): void {
            const selects: NodeListOf<HTMLElement> = document.querySelectorAll('.selected');
            selects.forEach(item => item.classList.add('matched'));
        }

        function resetGuess(): void {
            count = 0;
            firstGuess = '';
            secondGuess = '';
            previousCard = null;

            const selects: NodeListOf<HTMLElement> = document.querySelectorAll('.selected');
            selects.forEach(item => item.classList.remove('selected'));
        }

        function handleResetGame(): void {
            const matchedAll: NodeListOf<HTMLElement> = document.querySelectorAll('.matched');

            if (matchedAll.length) {
                matchedAll.forEach(el => el.classList.remove('matched'));
            }
        }

        function handleExitGame(): void {
            localStorage.removeItem('player');
            window.location.href = '/';
        }

        grid?.addEventListener('click', e => {
            const clicked: HTMLElement = e.target as HTMLElement;

            if (
                clicked.nodeName === 'SECTION' || // Fixed typo from 'SESSION' to 'SECTION'
                previousCard === clicked ||
                clicked.parentElement?.classList.contains('selected') ||
                clicked.parentElement?.classList.contains('matched')
            ) {
                return;
            }

            if (count < 2) {
                count++;
                if (count === 1) {
                    firstGuess = clicked.parentElement?.dataset.name ?? '';
                    clicked.parentElement?.classList.add('selected');
                } else {
                    secondGuess = clicked.parentElement?.dataset.name ?? '';
                    clicked.parentElement?.classList.add('selected');
                }

                if (firstGuess && secondGuess) {
                    if (firstGuess === secondGuess) {
                        setTimeout(matchingCard, delay);
                    }
                    setTimeout(resetGuess, delay);
                }
                previousCard = clicked;
            }
        });

        btnResetGame?.addEventListener('click', handleResetGame);
        btnExitGame?.addEventListener('click', handleExitGame);
    });
};

export default handleLogicGame;
