import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

export default function RegisterPage() {
  return (
    <div className="register-page">
      <div className="form-card">
        <h2>Реєстрація</h2>
        <form>
          <input type="text" placeholder="Ім'я користувача" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Пароль" required />
          <p className="terms">
            Реєструючись, ви погоджуєтеся з нашими <Link to="/terms">умови та положення</Link>.
          </p>
          <button type="submit" className="confirm-btn">Підтвердити</button>
        </form>
        <p className="switch">
          Вже маєте акаунт? <Link to="/login">Ввійти</Link>
        </p>
      </div>
    </div>
  );
}
