import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '../components/App/App';

const container: HTMLElement | null = document.getElementById('app');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);