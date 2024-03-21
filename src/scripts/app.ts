import axios from 'axios';

const handleLogicGame = () => {
    document.addEventListener('DOMContentLoaded', async () => {
        interface Card {
            id: string;
            img: string;
        }

        const fetchData = async () => {
            const array: Card[] = [];

            for (let i = 1; i <= 8; i++) {
                const { data }: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

                array.push({
                    id: data.id.toString(),
                    img: data.sprites.other.dream_world.front_default,
                });
            }
            return array;
        };

        const cardsArray = await fetchData();

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
            card.dataset.id = item.id;

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
                    firstGuess = clicked.parentElement?.dataset.id ?? '';
                    clicked.parentElement?.classList.add('selected');
                } else {
                    secondGuess = clicked.parentElement?.dataset.id ?? '';
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

        btnResetGame?.addEventListener('click', () => window.location.reload());
        btnExitGame?.addEventListener('click', handleExitGame);
    });
};

export default handleLogicGame;
