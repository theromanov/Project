import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      {/* Навігаційна шапка */}
      <header className="navbar">
        <div className="navbar__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo"
            className="navbar__logo-img"
          />
          <span className="navbar__brand">MyPlatform</span>
        </div>
        <nav className="navbar__links">
          <a href="/">Home</a>
          <a href="/authors">Автори</a>
          <a href="/publications">Публікації</a>
          <a href="/subscriptions">Підписки</a>
          <a href="/donate">Donate</a>
        </nav>
        <div className="navbar__actions">
          <a href="/login" className="btn btn--outline">Ввійти</a>
          <a href="/register" className="btn btn--primary">Зареєструватися</a>
        </div>
      </header>

      {/* Основний контент */}
      <main className="layout__main">
        {children ?? <Outlet />}
      </main>
    </>
  );
}
