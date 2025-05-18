# MyPlatform

## 🔎 Мета проєкту
Web-платформа для підтримки творчих авторів: створення облікових записів, публікацій, підписок та оплат через клієнтський інтерфейс на React та сервер на Node.js.

Веб-платформа для підтримки творчих авторів:
- Реєстрація та аутентифікація
- Створення та управління публікаціями
- Підписки на авторів
- Оплата контенту

---

## 🛠 Технічний стек

**Сервер**  
Node.js · Express · Knex · PostgreSQL · JWT · HTTPS

**Клієнт**  
React · HTML · CSS · JavaScript

**Інструменти**  
VS Code · Git · Postman

---

## 🚀 Встановлення та запуск

## Клієнт

cd client
npm install
npm start                                   # запустити React-додаток

### Сервер

cd server
npm install
npx knex migrate:latest --env development   # застосувати міграції
npm start                                   # запустити HTTPS-сервер


## 🔗 Документація API

| Метод    | Ендпоінт                         | Опис                                | Доступ    |
|:---------|:---------------------------------|:------------------------------------|:----------|
| **POST** | `/api/auth/register`             | Реєстрація (username, password)     | public    |
| **POST** | `/api/auth/login`                | Логін → JWT                         | public    |
| **GET**  | `/api/authors`                   | Список авторів                      | protected |
| **GET**  | `/api/authors/:id`               | Автор по ID                         | protected |
| **POST** | `/api/authors`                   | Створити автора                     | protected |
| **PUT**  | `/api/authors/:id`               | Оновити автора                      | protected |
| **DELETE**| `/api/authors/:id`              | Видалити автора                     | protected |
| …        | (аналогічно для)                 | `/publications`, `/subscriptions`, `/payments` | protected |

### 🔐 Захист маршруту
У всіх **protected** запитах необхідно додати заголовок:


---

## 🔐 Аутентифікація (JWT)

1. **Реєстрація**  
   - Користувач надсилає `username` та `password`.  
   - Пароль хешується за допомогою `bcrypt` і зберігається в базі.

2. **Логін**  
   - Перевіряємо коректність пароля (`bcrypt.compare`).  
   - Генеруємо JWT із корисним навантаженням `{ userId, username }` та строком життя 2 години.

3. **Middleware**  
   - `authMiddleware` зчитує токен із заголовку `Authorization`.  
   - Якщо токен валідний — додає `req.user` та передає управління далі, інакше повертає `401 Unauthorized`.

---

## 🔒 SSL / HTTPS

- **Сертифікат:** `server/cert/cert.pem`  
- **Приватний ключ:** `server/cert/key.pem`



const https = require('https')
const fs    = require('fs')
const app   = require('./app')  // Ваш Express-додаток

const options = {
  key:  fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
}

const PORT = process.env.PORT || 8080

https
  .createServer(options, app)
  .listen(PORT, () => {
    console.log(`HTTPS Server listening on port ${PORT}`)
  })





