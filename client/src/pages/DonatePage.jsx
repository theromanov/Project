import React from 'react';
import './DonatePage.css';

export default function DonatePage() {
  return (
    <div className="donate-page">
      {/* Основний контент */}
      <div className="donate-container">
        {/* Ліва колонка з налаштуваннями */}
        <section className="form-section">
          <h2>Налаштування рівня членства</h2>

          <label>
            <span>Назва рівня членства</span>
            <input type="text" placeholder="Бронзовий" />
          </label>

          <div className="price-row">
            <div className="price-input">
              <span>$</span>
              <input type="number" defaultValue="5" />
              <span className="period">Місяць</span>
            </div>
            <div className="price-input">
              <span>$</span>
              <input type="number" defaultValue="50" />
              <span className="period">Рік</span>
            </div>
          </div>

          <label className="image-upload">
            <span>Зображення</span>
            <div className="upload-box">
              <span className="cloud-icon">☁️</span>
              <span>Завантажте зображення або перетягніть його</span>
              <small>(Рекомендований розмір: 250×150 пікселів)</small>
            </div>
          </label>

          <label>
            <span>Опис</span>
            <textarea placeholder="Введіть опис..." rows="4" />
          </label>
        </section>

        {/* Права колонка — превʼю */}
        <aside className="preview-section">
          <div className="level-preview">
            <h3>Місячна підписка</h3>
            <div className="preview-box">
              <h4>Бронзовий</h4>
              <div className="price">$5</div>
              <div className="per">В місяць</div>
              <button className="join-btn">Приєднатися</button>
              <ul className="features">
                <li>Підтримуйте мене щомісяця</li>
                <li>Розблокуйте ексклюзивні публікації та повідомлення</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Футер */}
      <footer className="donate-footer">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} MyPlatform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
