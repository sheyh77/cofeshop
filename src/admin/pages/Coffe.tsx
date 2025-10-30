import { Button } from "antd";
import { useState, useEffect } from "react";
import ProductModal from "../components/productModal";
import axios from "axios";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  type: string;
}

export default function Coffe() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2>Mahsulotlar ro‘yxati</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          Qo‘shish
        </Button>
      </div>

      {/* Modal */}
      <ProductModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={fetchProducts}
      />

      {/* Mahsulotlar ro‘yxati */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
            <img src={`http://localhost:5000${p.image}`} alt={p.title} style={{ width: "100%", borderRadius: 8 }} />
            <h3>{p.title}</h3>
            <p>{p.price} so‘m</p>
            <small>{p.type}</small>
          </div>
        ))}
      </div>
    </div>
  );
}