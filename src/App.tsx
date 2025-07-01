import { Layout } from './component/Layout';
import { Home } from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './component/Pages/NotFoundPage/NotFoundPage';
import { CardsPage } from './component/Pages/CardsPages/CardsPage'
import { Header } from './component/Header/Header';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<Header/>}>
          <Route path="/forcards" element={<CardsPage />} />      
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
};