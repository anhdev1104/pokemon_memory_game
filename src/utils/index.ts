import Navigo from 'navigo';

type ComponentFunction = () => string | Promise<string>;
const router = new Navigo('/', { linksSelector: 'a' });

const render = async (component: ComponentFunction, root: HTMLElement | null, ...events: any[]) => {
    try {
        if (root) {
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
