import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Treatments from './pages/Treatments';
import Payments from './pages/Payments';
import Appointments from './pages/Appointments';

// import './App.css';

const App = () => {
  return (
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/patients" element={<Patients />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
