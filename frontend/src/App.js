import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";

import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import NotFound from "./landing_page/NotFound";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Login from "./landing_page/signup/Login";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";

import Dashboard from "./dashboard/components/Dashboard";

function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingLayout>
              <HomePage />
            </LandingLayout>
          }
        />

        <Route
          path="/about"
          element={
            <LandingLayout>
              <AboutPage />
            </LandingLayout>
          }
        />

        <Route
          path="/product"
          element={
            <LandingLayout>
              <ProductPage />
            </LandingLayout>
          }
        />

        <Route
          path="/pricing"
          element={
            <LandingLayout>
              <PricingPage />
            </LandingLayout>
          }
        />

        <Route
          path="/support"
          element={
            <LandingLayout>
              <SupportPage />
            </LandingLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <LandingLayout>
              <Signup />
            </LandingLayout>
          }
        />

        <Route
          path="/login"
          element={
            <LandingLayout>
              <Login />
            </LandingLayout>
          }
        />

        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route
          path="*"
          element={
            <LandingLayout>
              <NotFound />
            </LandingLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}