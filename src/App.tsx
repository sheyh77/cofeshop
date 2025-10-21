import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Cofe from "./pages/Cofe";
import Desert from "./pages/Desert";
import Tea from "./pages/Tea";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import Location from "./pages/Location";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/cofe" element={<Cofe />} />
        <Route path="/desert" element={<Desert />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
