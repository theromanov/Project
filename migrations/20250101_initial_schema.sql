-- authors
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  bio TEXT,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- publications
CREATE TABLE publications (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  published_at TIMESTAMP DEFAULT NOW()
);

-- subscriptions
CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE,
  status VARCHAR(20) DEFAULT 'active'
);

-- payments
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  subscription_id INTEGER REFERENCES subscriptions(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  paid_at TIMESTAMP DEFAULT NOW(),
  method VARCHAR(50)
);
