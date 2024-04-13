import Navigo from 'navigo';
import Loader, { hideLoader } from '../components/Loader';

type ComponentFunction = () => string | Promise<string>;
const router = new Navigo('/', { linksSelector: 'a' });

const render = async (component: ComponentFunction, root: HTMLElement | null, ...events: any[]) => {
  Loader();
  try {
    if (root) {
      hideLoader();
      root.innerHTML = await component();
      events.forEach(event => event());
    } else {
      console.error('Root element not found');
    }
  } catch (error) {
    console.error(error);
  }
};

export { router, render };
