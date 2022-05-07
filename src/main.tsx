import { render } from 'preact';
import App from './app';
import './assets/styles/global.css';
import './assets/styles/index.css';

render(<App />, document.getElementById('app')!);
