import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo"
          className="navbar__logo-img"
        />
        <span>MyPlatform</span>
      </div>
      <nav className="navbar__links">
        <NavLink to="/authors">Автори</NavLink>
        <NavLink to="/publications">Публікації</NavLink>
        <NavLink to="/subscriptions">Підписки</NavLink>
        <NavLink to="/donate">Donate</NavLink>
      </nav>
      <div className="navbar__auth">
        <NavLink to="/login" className="btn-outline">Login</NavLink>
        <NavLink to="/register" className="btn-primary">Sign Up</NavLink>
      </div>
    </header>
  );
}
