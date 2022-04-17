import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CategoryItems from './components/category-items';
import ROUTES from './constants/routes';
import Category from './pages/category-page/page';
import ShopWindowPage from './pages/main-shop-window/page';
import NotFound from './pages/not-found';
import ProductPage from './pages/product-page/page';
import ShoppingBasket from './pages/shopping-basket/page';
import ShopWindow from './pages-template';
import store from './redux';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopWindow />}>
        <Route index element={<ShopWindowPage />} />
        <Route path={`${ROUTES.POST}/:id`} element={<ProductPage />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
        <Route path="category/:typesId" element={<CategoryItems />} />
        <Route path={ROUTES.BASKET} element={<ShoppingBasket />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
