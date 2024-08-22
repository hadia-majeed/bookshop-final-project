import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart'; 
import Hotitems from './components/Hotitems'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import GenrePage from './components/GenrePage';
import products from './products';
import LoginSignupForm from './components/login-signup';




const HomePage = () => (
  <div>
    <div className="container">
      <h1 className="text mb-4" style={{ fontWeight: 'bold', marginTop: '-50px' }}>Buy Books Online With The Best Price!</h1>
      <h2 className="text my-5" style={{ fontWeight: 'bold', marginTop: '-90px' }}>Our Collection</h2>
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  </div>
);

const pageitem = [
  {
    id: 1,
    imgSrc: `${process.env.PUBLIC_URL}/imagesfolder/Big-Shot(DIary Of a Wimpy Kid).webp`,
    title: "Big-Shot(DIary Of a Wimpy Kid)",
    price: "Rs1,500",
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: `${process.env.PUBLIC_URL}/imagesfolder/A-Little-Princess-Puffin-Classic.webp`,
    title: "A Little Princess (Puffin Classic)",
    price: "Rs1,080",
    quantity: 1,
  },
  {
    id: 3,
    imgSrc: `${process.env.PUBLIC_URL}/imagesfolder/Karachi Halwa.webp`,
    title: "Karachi Halwa",
    price: "Rs1,500",
    quantity: 1,
  },
  {
    id: 4,
    imgSrc: `${process.env.PUBLIC_URL}/imagesfolder/Hippie (Paulo Coelho).webp`,
    title: "Hippie (Paulo Coelho)",
    price: "Rs700",
    quantity: 1,
  },
  {
    id: 5,
    imgSrc: `${process.env.PUBLIC_URL}/imagesfolder/Muhammad  A Biography of the Prophet.webp`,
    title: "Muhammad  A Biography of the Prophet",
    price: "Rs700",
    quantity: 1,
  },
];
const HotItempage = () => (
  <div>
    <div className="container" style={{marginTop:'-90px'}}>
      <h2 className="text my-5" style={{ fontWeight: 'bold' }}>Hot Items!</h2>
      <div className="row">
        {pageitem.map(item => (
          <Hotitems key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
);



const App = () => (
  <Router>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<ShoppingCart />} />
    <Route path="/HotItems" element={<HotItempage />} />
    <Route path="/genre/:genre" element={<GenrePage products={products} />} />
    <Route path="/login" element={<LoginSignupForm />} />


    </Routes>
  </Router>
);

export default App;

