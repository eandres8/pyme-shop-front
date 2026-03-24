import { Routes, Route } from 'react-router';

import { CartPage } from './views/cart/pages/CartPage/CartPage';
import { HomePage } from './views/products/pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App;
