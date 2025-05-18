import React from 'react';
import './HomePage.css';

const testimonials = [
  { text: 'Роман активно цікавиться технологіями та стартапи з 2018 року.', supporters: '8,780', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { text: 'Калі Коен створює велоспорт у приміщенні та силові тренування на YouTube!', supporters: '4,488', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { text: 'Вчитель Стефано створює відео та подкасти для YouTube', supporters: '641', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { text: '«The Thrill Of The Thrift» – це створення відео про економію коштів.', supporters: '112', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { text: 'Beach Talk Radio – це маленький подкаст Dinky', supporters: '1,805', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { text: 'Simple Politics допомагає людям вести кращі розмови про політику', supporters: '', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
];

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-inner">
        <div className="stars">
          {'★★★★★'.split('').map((s, i) =>
            <span key={i} className="star">★</span>
          )}
        </div>

        <h1 className="home-title">Фінансуйте свою<br />творчу роботу</h1>
        <p className="home-subtitle">Прийміть підтримку. Оформіть членство. Відкрийте магазин. Це простіше, ніж ви думаєте.</p>
        <button className="home-cta">Розпочати мою сторінку</button>
        <p className="home-note">Це безкоштовно та займає менше хвилини!</p>

        {testimonials.map((t, idx) => (
          <div key={idx} className={`card card-${idx + 1}`}>
            <img className="card-avatar" src={t.avatar} alt="" />
            <p className="card-text">{t.text}</p>
            {t.supporters && (
              <p className="card-supporters">❤ {t.supporters} supporters</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
