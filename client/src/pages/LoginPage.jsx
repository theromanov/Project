import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="form-card">
        <h2>Вхід</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <p className="forgot">
            <Link to="/reset">Забули пароль?</Link>
          </p>
          <button type="submit" className="confirm-btn">Підтвердити</button>
        </form>
        <p className="switch">
          Нема акаунту? <Link to="/register">Реєстрація</Link>
        </p>
      </div>
    </div>
  );
}
