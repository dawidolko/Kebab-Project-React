import React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* First focusable element: lets a keyboard user jump the navigation and
          land straight on the menu. */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Hero />
      <main id="main-content" tabIndex={-1}>
        <Products id="menu" heading="Choose your favorite" data={productData} />
        <Feature />
        <Products id="desserts" heading="Sweet Treats for You" data={productDataTwo} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
