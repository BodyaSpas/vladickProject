import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/homePage.tsx'
import './App.scss';
import AboutDishPage from './pages/aboutDishPage/aboutDishPage.tsx';
import Tickets from './pages/ticketsPage/ticketsPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`$product/:id`} element={<AboutDishPage />}>
        </Route>
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
