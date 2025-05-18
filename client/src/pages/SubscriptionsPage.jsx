import React, { useState } from 'react';
import { FaBullhorn, FaShareAlt, FaCopy, FaLock } from 'react-icons/fa';
import './SubscriptionsPage.css';

const plans = [
  {
    term: '1 місяць',
    title: 'Бронзовий',
    features: [
      'Доступ до базових публікацій',
      'Щомісячні оновлення по email',
    ],
  },
  {
    term: '6 місяців',
    title: 'Срібний',
    features: [
      'Усі можливості Бронзового',
      'Щотижневий Q&A в прямому ефірі',
    ],
  },
  {
    term: '12 місяців',
    title: 'Золотий',
    features: [
      'Усі можливості Срібного',
      'Персональні консультації',
    ],
  },
  {
    term: '24 місяці',
    title: 'Платиновий',
    features: [
      'Усі можливості Золотого',
      'Ексклюзивний доступ до бета-функцій',
    ],
  },
];

export default function SubscriptionsPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="subscriptions-page">
      <h1 className="subscriptions-title">Підписки</h1>

      {/* Invite */}
      <div className="invite-block">
        <FaBullhorn className="invite-icon" />
        <div className="invite-content">
          <h2>Запросіть друзів-творців та розблокуйте ексклюзивні нагороди</h2>
          <p>
            Шукаєте ідеї для просування? Дивіться наші <a href="#">wall of love</a>.
          </p>
          <div className="invite-action">
            <input type="text" value="myplatform.com/invite/yourfriend" />
            <button><FaCopy /> Копювати</button>
            <button className="share"><FaShareAlt /> Поділитися</button>
          </div>
        </div>
      </div>

      {/* Timeline + Plans */}
      <div className="timeline-and-list">
        {plans.map((plan, i) => (
          <div
            key={plan.term}
            className={`plan-row ${active === i ? 'active-row' : ''}`}
            onClick={() => setActive(i)}
          >
            <div className="timeline-cell">
              <div className={`timeline-dot ${active === i ? 'active' : ''}`} />
              { /* лінія праворуч */}
              <div className="timeline-line" />
              <div className="timeline-term">{plan.term}</div>
            </div>

            <div className={`plan-item ${active === i ? 'active' : ''}`}>
              <div className="plan-header">
                <h3>{plan.title}</h3>
                <FaLock />
              </div>
              <ul className="plan-features">
                {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
