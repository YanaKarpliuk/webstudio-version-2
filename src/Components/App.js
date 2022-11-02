import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Portfolio from 'Pages/Portfolio';
import Contacts from 'Pages/Contacts';
import NotFound from 'Pages/NotFound';
import SharedLayout from './SharedLayout';
import PortfolioDetails from 'Pages/PortfolioDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:portfolioId" element={<PortfolioDetails />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
