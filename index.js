import { render } from 'react-dom';
import init from './src/init.tsx';

const run = () => {
  console.log('test');
  render(init(), document.querySelector('#app'));
};

run();
