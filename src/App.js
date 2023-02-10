
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Details from './pages/Details';
import { MyCard } from './pages/MyCard';
import MyOrders from './pages/MyOrders';
import { Products } from './pages/Products';

const PRODUCTS = [
  {
    id: 1,
    title: "Products Name 1",
  },
  {
    id: 2,
    title: "Products Name 2",
  },
  {
    id: 3,
    title: "Products Name 3",
  },
  {
    id: 5,
    title: "Products Name 4",
  },
];

function App() {

   
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/products/"
          element={<Products PRODUCTS={PRODUCTS}/>} />
        <Route path="/products/:id/details" element={<Details products={PRODUCTS} />} />
        <Route path="/myCard" element={<MyCard />} />
        <Route path="/myOrders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;
