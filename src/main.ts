import Game from './components/Game';
import Home from './components/Home';
import handleLogicGame from './scripts/app';
import initializeGame from './scripts/player';
import './styles.scss';
import { render, router } from './utils';

const app: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#app');

router
    .on('/', () => render(Home, app, initializeGame))
    .on('/game', () => render(Game, app, handleLogicGame))
    .resolve();
