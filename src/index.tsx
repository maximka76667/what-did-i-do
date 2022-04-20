import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.sass';
import App from './App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
