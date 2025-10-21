import { useCart } from "../context/CartContext";
import Accepted from "../features/Accepted";
import All from "../features/All";
import Cancelled from "../features/Cancelled";
import Prepared from "../features/Prepared";
import Header from "../layout/Header";
import { useState } from "react";

export default function ShoppingCart() {
  const [active, setActive] = useState<string>("all");
  const { cart } = useCart();

  return (
    <section className="shopping">
      <Header />
      <div className="cantainer">
        <div className="shopping-wrap">
          <div className="shopping-left">
            <h1 className="shopping-left-title">Buyurtmalarim</h1>
            <div className="menu-menu shopping-menu-none">
              <div
                className={`menu-menu-page ${active === "all" ? "active" : ""}`}
                onClick={() => setActive("all")}
              >
                <p className="menu-menu-title">Barchasi</p>
              </div>
              <div
                className={`menu-menu-page ${
                  active === "accepted" ? "active" : ""
                }`}
                onClick={() => setActive("accepted")}
              >
                <p className="menu-menu-title">Qabul qilingan</p>
              </div>
              <div
                className={`menu-menu-page ${
                  active === "cancelled" ? "active" : ""
                }`}
                onClick={() => setActive("cancelled")}
              >
                <p className="menu-menu-title">Bekor qilingan</p>
              </div>
              <div
                className={`menu-menu-page ${
                  active === "prepared" ? "active" : ""
                }`}
                onClick={() => setActive("prepared")}
              >
                <p className="menu-menu-title">Tayorlanmoqda</p>
              </div>
            </div>

            <div className="shopping-menu">
              <div
                className={`shopping-menu-page ${
                  active === "accepted" ? "active" : ""
                }`}
                onClick={() => setActive("accepted")}
              >
                <p className="shopping-menu-title">Qabul qilingan</p>
              </div>
              <div
                className={`shopping-menu-page ${
                  active === "cancelled" ? "active" : ""
                }`}
                onClick={() => setActive("cancelled")}
              >
                <p className="shopping-menu-title">Bekor qilingan</p>
              </div>
              <div
                className={`shopping-menu-page ${
                  active === "prepared" ? "active" : ""
                }`}
                onClick={() => setActive("prepared")}
              >
                <p className="shopping-menu-title">Tayorlanmoqda</p>
              </div>
            </div>

            {/* shopping-left-menu-content */}
            {active === "all" && <All />}
            {active === "accepted" && <Accepted />}
            {active === "cancelled" && <Cancelled />}
            {active === "prepared" && <Prepared />}
          </div>
          <div className="shopping-right">
            <h1 className="shopping-right-title">Buyurtmalar xulosasi</h1>
            <div className="shopping-right-cards">
              <div className="shopping-right-cards-item">
                <p className="shopping-right-cards-item-title">
                  Jami buyurtmalar
                </p>
                <p className="shopping-right-cards-item-num">{cart.length}</p>
                <div className="shopping-right-cards-item-chart"></div>
              </div>
              <div className="shopping-right-cards-item">
                <p className="shopping-right-cards-item-title">
                  Qabul qilingan buyurtmalar
                </p>
                <p className="shopping-right-cards-item-num">10</p>
                <div className="shopping-right-cards-item-chart2"></div>
              </div>
              <div className="shopping-right-cards-item">
                <p className="shopping-right-cards-item-title">
                  Bekor qilingan buyurtmalar
                </p>
                <p className="shopping-right-cards-item-num">5</p>
                <div className="shopping-right-cards-item-chart3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
