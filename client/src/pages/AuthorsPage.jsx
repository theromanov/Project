import React from 'react';
import './AuthorsPage.css';

const authors = [
  {
    id: 1,
    name: 'Роман Сипливий',
    role: 'Студент',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Активно цікавиться технологіями та стартапи з 2018 року.'
  },
  {
    id: 2,
    name: 'Оксана Шевченко',
    role: 'Музикант',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Авторка трьох інді-фолк альбомів, виступає на міжнародних фестивалях.'
  },
  {
    id: 3,
    name: 'Сара Юнг',
    role: 'Письменниця',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Публікується в провідних літературних журналах і випустила два романи.'
  },
  {
    id: 4,
    name: 'Дмитро Мацієнко',
    role: 'Ілюстратор',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    description: 'Ілюстратор коміксів і дитячих книжок, працює з великими видавництвами.'
  },
  {
    id: 5,
    name: 'Аліша Вело',
    role: 'Фотограф',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    description: 'Знімає урбаністичні пейзажі, не раз виставлялася в галереях.'
  },
  {
    id: 6,
    name: 'Лям Конор',
    role: 'Режисер',
    avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    description: 'Режисер короткометражок, лауреат кількох кінофестивалів.'
  },
  {
    id: 7,
    name: 'Марія Гарсія',
    role: 'Блогер',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    description: 'Веде відомий тревел-блог та пише про свої подорожі світом.'
  },
  {
    id: 8,
    name: 'Етан Патель',
    role: 'Шеф-кухар',
    avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    description: 'Шеф-кухар з досвідом роботи в трьох зіркових ресторанах Michelin.'
  },
  {
    id: 9,
    name: 'Ніна Хоффман',
    role: 'Дизайнер',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: 'Графічна дизайнерка, спеціалізується на брендингу та UI/UX.'
  },
];

export default function AuthorsPage() {
  return (
    <div className="authors-page">
      <h2 className="authors-title">Автори</h2>
      <div className="authors-grid">
        {authors.map(a => (
          <div key={a.id} className="author-card">
            <img src={a.avatar} alt={a.name} className="avatar" />
            <div className="info">
              <strong className="name">{a.name}</strong>
              <span className="role">{a.role}</span>
              <p className="description">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
