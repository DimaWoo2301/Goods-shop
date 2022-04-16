import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CategoryItems from './components/category-items';
import ROUTES from './constants/routes';
import Category from './pages/category-page/page';
import ShopWindowPage from './pages/main-shop-window/page';
import ProductPage from './pages/product-page/page';
import ShopWindow from './pages-template';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopWindow />}>
        <Route index element={<ShopWindowPage />} />
        <Route path={`${ROUTES.POST}/:id`} element={<ProductPage />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
        <Route path="category/:typesId" element={<CategoryItems />} />
      </Route>
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
