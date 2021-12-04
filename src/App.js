import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage, CategoryPage, ProductPage, CheckoutPage } from "./pages";
import { Header, CartModal } from "./components";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/product/:productId" element={<ProductPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/:categoryName" element={<CategoryPage/>} />
          <Route path="/" element={<HomePage/>} exact />
        </Routes>
      </Container>
      <CartModal />
    </Router>
  );
}

