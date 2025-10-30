import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { routes } from "./data/routes";

function App() {
  return (
    <CartProvider>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </CartProvider>
  );
}

export default App;
