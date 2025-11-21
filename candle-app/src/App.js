import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import Silder from "./components/Silder";
import Section1 from "./components/section1";
import ProductPage from "./ProductPage";
import FeaturedProducts from "./components/FeaturedProducts";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Silder />
              <Section1 />
              <FeaturedProducts />
            </div>
          }
        />

        {/* Dynamic Product Page */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
