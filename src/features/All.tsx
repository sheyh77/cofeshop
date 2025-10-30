import { Button } from "antd";
import { useCart } from "../context/CartContext";

export default function All() {
  const { cart, removeFromCart } = useCart();
  return (
    <section className="all">
      <div className="all-cards">
        {cart.map((item) => (
          <div className="all-cards-item" key={item.id}>
            <div className="all-cards-item-left">
              <div className="all-cards-item-left-img">
                <img src={`http://localhost:5000${item.image}`} alt="product-image" />
              </div>
              <div className="all-cards-item-left-desc">
                <p className="all-cards-item-desc-title">{item.title}</p>
                <p className="all-cards-item-desc-price">{item.price}</p>
                <p className="all-cards-item-desc-date">date</p>
              </div>
            </div>
            <div className="all-cards-item-right">
              <p className="all-cards-item-right-title">Tayorlanmoqda</p>
              <Button danger onClick={() => removeFromCart(item.id)}>
                O‘chirish
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}