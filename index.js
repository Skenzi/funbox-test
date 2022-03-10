import { render } from 'react-dom';
import init from './src/init.tsx';

const run = () => {
  render(init(), document.querySelector('#app'));
};

run();
