import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import AboutPage from './landing_page/about/AboutPage';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Login from './landing_page/signup/Login';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/product" element={<ProductPage />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/support" element={<SupportPage />} />


  <Route path="*" element={<NotFound />} />
</Routes>
    <Footer/>
  </BrowserRouter>
);
