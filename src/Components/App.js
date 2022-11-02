import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
const Home = lazy(() => import('Pages/Home'));
const Portfolio = lazy(() => import('Pages/Portfolio'));
const Contacts = lazy(() => import('Pages/Contacts'));
const NotFound = lazy(() => import('Pages/NotFound'));
const PortfolioDetails = lazy(() => import('Pages/PortfolioDetails'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:portfolioId" element={<PortfolioDetails />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
