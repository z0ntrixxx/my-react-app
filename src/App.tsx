import { Layout } from './component/Layout';
import { Home } from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { CardsPage } from './Pages/CardsPages/CardsPage'
import { Header } from './component/Header/Header';
import { useState } from 'react';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/forcards" element={<CardsPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
};