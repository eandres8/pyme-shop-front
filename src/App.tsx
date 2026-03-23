import { Routes, Route } from 'react-router';

import { HomePage } from './views/products/pages';
import { CartPage } from './views/cart/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App
