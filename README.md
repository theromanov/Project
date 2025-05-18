MyPlatform

Мета проєкту

Web-платформа для підтримки творчих авторів: створення облікових записів, публікацій, підписок та оплат через клієнтський інтерфейс на React та сервер на Node.js.

Технічний стек

Сервер: Node.js, Express, Knex, PostgreSQL, JWT, HTTPS

Клієнт: React, HTML, CSS, JavaScript

Інструменти: VS Code, Git, Postman

Структура проекту
project/
├─ server/               # Серверна частина (Node.js + Express)
│  ├─ cert/              # SSL-ключі
│  ├─ migrations/        # Міграції бази даних (Knex)
│  ├─ src/
│  │  ├─ controllers/    # Обробники запитів
│  │  ├─ middleware/     # JWT-аутентифікація
│  │  ├─ models/         # Sequelize/прикладних моделей (якщо є)
│  │  ├─ routes/         # Ендпоінти API
│  │  ├─ db.js           # Ініціалізація Knex з .env
│  ├─ knexfile.js        # Налаштування Knex
│  ├─ package.json
│  └─ .env               # Параметри підключення до БД та JWT_SECRET
├─ client/               # Клієнтська частина (React)
│  ├─ public/
│  ├─ src/
│  │  ├─ components/     # Layout та NavBar
│  │  ├─ pages/          # Головна, автори, публікації тощо
│  │  ├─ services/       # HTTP-клієнт (axios)
│  ├─ package.json
└─ README.md             # Опис проекту (цей файл)


Встановлення та запуск

Сервер
cd server
npm install
# Створити таблиці у БД
npx knex migrate:latest --env development
# Запуск HTTPS-сервера
npm start

Клієнт
cd ../client
npm install
npm start

Документація API
Метод

Ендпоінт

Опис

Захист

POST

/api/auth/register

Реєстрація користувача (username, password)

Public

POST

/api/auth/login

Логін, повертає JWT

Public

GET

/api/authors

Список авторів

Protected

GET

/api/authors/:id

Автор за ID

Protected

POST

/api/authors

Створити автора

Protected

PUT

/api/authors/:id

Оновити автора

Protected

DELETE

/api/authors/:id

Видалити автора

Protected

(аналогічно для /publications, /subscriptions, /payments)


Для захищених маршрутів потрібно передати заголовок:
Authorization: Bearer <token>

Аутентифікація

Після логіну отримуєте JWT.

Мідлвар authMiddleware перевіряє токен у заголовку та дозволяє доступ.

SSL/HTTPS

Сертифікат та ключ знаходяться в server/cert/key.pem та server/cert/cert.pem.

Сервер стартує як HTTPS:
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};
https.createServer(options, app).listen(PORT, ...);

Можливі покращення

Додавання рефреш-токенів

Рольова модель доступу

Завантаження зображень постів

Інтеграція платіжного шлюзу

Тестування (Jest + Supertest)