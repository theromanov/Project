import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AuthorsPage from './pages/AuthorsPage';
import PublicationsPage from './pages/PublicationsPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import DonatePage from './pages/DonatePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}
