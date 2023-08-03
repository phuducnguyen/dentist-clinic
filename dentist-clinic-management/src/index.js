import React from 'react';
import * as ReactDOMClient from 'react-dom/client'; // Import the client module for the New Root API

import App from './App';

import './styles.css';

// Import your components and pages here
import Home from './pages/Home';
// import Appointments from './pages/Appointments';
// import Patients from './pages/Patients';
// import Treatments from './pages/Treatments';
// import NotFound from './pages/NotFound';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);