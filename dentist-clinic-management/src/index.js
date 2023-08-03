import React from 'react';
import * as ReactDOMClient from 'react-dom/client'; // Import the client module for the New Root API

import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <App />
);
