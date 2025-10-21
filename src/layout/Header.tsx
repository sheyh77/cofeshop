import { Coffee, CupSoda, Flame, Home, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: <Home size={26} />, label: "Home" },
    { path: "/cofe", icon: <Coffee size={26} />, label: "Coffee" },
    { path: "/desert", icon: <CupSoda size={26} />, label: "Dessert" },
    { path: "/tea", icon: <Flame size={24} />, label: "Tea" },
  ];
  return (
    <header className="header">
      <div className="cantainer">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to="/">
              <h1>Coffe shop</h1>
            </Link>
            <Link to="/shopping" className="header-shopping-icon">
              <ShoppingCart size={26}/>
            </Link>
          </div>
          <nav className="header-nav">
            <Link className="header-nav-link" to="/cofe">
              Coffe
            </Link>
            <Link className="header-nav-link" to="/desert">
              Desert
            </Link>
            <Link className="header-nav-link" to="/tea">
              Tea
            </Link>
            <Link to="/shopping">
              <ShoppingCart />
            </Link>
          </nav>

          {/* header-responsive */}
          <div className="header-menu">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <div
                    className={`header-menu-item ${isActive ? "active" : ""}`}
                  >
                    {item.icon}
                    <p className="header-menu-item-title">{item.label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
