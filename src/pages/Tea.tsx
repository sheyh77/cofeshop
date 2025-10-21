import { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Button, Input, Modal, Select, message } from "antd";
import { useCart } from "../context/CartContext";

export default function Tea() {
  interface Post {
    id: number;
    title: string;
    image: string;
    description: string;
    price: string;
  }

  const posts: Post[] = [];
  const [cofe, setCofe] = useState(posts);
  const [selectItem, setSelectItem] = useState<Post | null>(null);
  const [open, setOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://34df94e0332d52dc.mokky.dev/tea")
      .then((res) => res.json())
      .then((data) => setCofe(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);

  const handleOpen = (item: Post) => {
    setSelectItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectItem(null);
  };

  const handleOrder = () => {
    if (!deliveryType || !phone) {
      message.warning("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }
    if (!selectItem) return;

    addToCart(selectItem);

    message.success(
      `${selectItem.title} buyurtma qilindi! (${deliveryType}, tel: ${phone})`
    );
    handleClose();
  };

  return (
    <section className="cofe">
      <Header />
      <div className="cantainer">
        <div className="cofe-wrap">
          <div className="cofe-title">
            <p>Tea</p>
          </div>
          <div className="cofe-card">
            {cofe.length === 0 ? (
              <p>Hozircha hech narsa yoq</p>
            ) : (
              cofe.map((item) => (
                <div className="cofe-card-item" key={item.id}>
                  <div className="cofe-card-item-img">
                    <img src={item.image} alt="cofe-image" />
                    <button
                      className="cofe-card-item-btn"
                      onClick={() => handleOpen(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cofe-card-item-desc">
                    <div className="cofe-card-item-desc-title">
                      {item.title}
                    </div>
                    <div className="cofe-card-item-desc-price">
                      ${item.price}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        title={selectItem?.title}
        open={open}
        onCancel={handleClose}
        footer={null}
      >
        {selectItem && (
          <div>
            <img
              src={selectItem.image}
              alt={selectItem.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <p className="mt-2 text-gray-600">
              {selectItem.description || "Tavsif mavjud emas"}
            </p>

            <h3 className="text-lg font-semibold mt-3">${selectItem.price}</h3>

            <div className="mt-4 cofe-tanlang">
              <label className="font-medium">Buyurtma turi:</label>
              <Select
                placeholder="Tanlang"
                value={deliveryType || undefined}
                onChange={(value) => setDeliveryType(value)}
                className="w-full mt-1"
                options={[
                  { label: "Olib ketish", value: "olib ketish" },
                  { label: "Yetkazib berish", value: "yetkazib berish" },
                  { label: "Joyida ichish", value: "joyida ichish" },
                ]}
              />
            </div>

            <div className="mt-3 cofe-num">
              <label className="font-medium">Telefon raqam:</label>
              <Input
                placeholder="+998..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
              />
            </div>

            <Button
              type="primary"
              block
              className="mt-4 bg-green-600"
              onClick={handleOrder}
            >
              Buyurtma berish
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
