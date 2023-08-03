import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Salut Dentist</h1>
      </div>
      <nav className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/appointments">Appointments</Link>      </nav>
    </header>
  );
};

export default Header;
