import React, { useState } from 'react';
import './PublicationsPage.css';

// Іконки з бібліотеки react-icons
import { FaRegFileAlt, FaRegImages, FaHeadphones, FaPoll } from 'react-icons/fa';

export default function PublicationsPage() {
  const [tab, setTab] = useState('published');
  const tabs = [
    { id: 'published', label: 'Опубліковано' },
    { id: 'drafted', label: 'Чернетки' },
    { id: 'scheduled', label: 'Заплановані' },
  ];

  return (
    <div className="pub-page">
      {/* Заголовок */}
      <h2 className="pub-title">Додати новий пост</h2>

      {/* Опції створення */}
      <div className="pub-options">
        <div className="opt-card" onClick={() => alert('Post')}>
          <FaRegFileAlt className="opt-icon" />
          <span>Пости</span>
        </div>
        <div className="opt-card" onClick={() => alert('Album')}>
          <FaRegImages className="opt-icon" />
          <span>Альбом</span>
        </div>
        <div className="opt-card" onClick={() => alert('Audio')}>
          <FaHeadphones className="opt-icon" />
          <span>Аудіо</span>
        </div>
        <div className="opt-card" onClick={() => alert('Poll')}>
          <FaPoll className="opt-icon" />
          <span>Опитування</span>
        </div>
      </div>

      {/* Вкладки */}
      <div className="pub-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={tab === t.id ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Контент */}
      <div className="pub-content">
        {tab === 'published' && (
          <div className="empty-state">
            <FaRegFileAlt className="mega-icon" />
            <h3>Опублікуй свій перший пост</h3>
            <p>
              Публікуйте публічні пости або зробіть їх ексклюзивними для ваших прихильників чи учасників. Автори, які регулярно публікують ексклюзивні матеріали, як правило, отримують більше підтримки.
            </p>
          </div>
        )}
        {tab === 'drafted' && (
          <div className="empty-state">
            <p>У вас ще немає чернеток.</p>
          </div>
        )}
        {tab === 'scheduled' && (
          <div className="empty-state">
            <p>У вас ще немає запланованих публікацій.</p>
          </div>
        )}
      </div>
    </div>
  );
}
