import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import ContextProvider from "./components/ContextProvider/ContextProvider";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
