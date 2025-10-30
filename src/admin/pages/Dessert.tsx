import { Card, Modal, Input, message, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

export default function Dessert() {
  const [cofe, setCofe] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Post | null>(null);
  const [editedProduct, setEditedProduct] = useState<Post | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  // Ma'lumotlarni olish
  useEffect(() => {
    fetch("https://34df94e0332d52dc.mokky.dev/desert")
      .then((res) => res.json())
      .then((data) => setCofe(data))
      .catch((err) => console.log(err, "Xato"));
  }, []);

  // Modalni ochish
  const handleEdit = (product: Post) => {
    setSelectedProduct(product);
    setEditedProduct({ ...product });
    setIsModalOpen(true);
  };

  // Modalni yopish
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // O'zgarishni saqlash
  const handleSave = async () => {
    if (!editedProduct) return;

    try {
      await fetch(
        `https://34df94e0332d52dc.mokky.dev/desert/${editedProduct.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedProduct),
        }
      );

      const updated = cofe.map((item) =>
        item.id === editedProduct.id ? editedProduct : item
      );
      setCofe(updated);
      message.success("Mahsulot yangilandi ✅");
      handleClose();
    } catch (error) {
      console.log("Xatolik:", error);
      message.error("Saqlashda xatolik yuz berdi ❌");
    }
  };

  // O'chirish
  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://34df94e0332d52dc.mokky.dev/desert/${id}`, {
        method: "DELETE",
      });

      const updated = cofe.filter((item) => item.id !== id);
      setCofe(updated);
      message.success("Mahsulot o‘chirildi 🗑️");
    } catch (error) {
      console.log("Xatolik:", error);
      message.error("O‘chirishda xatolik yuz berdi ❌");
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.title || !newProduct.description || !newProduct.price) {
      message.warning("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const res = await fetch("https://34df94e0332d52dc.mokky.dev/desert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      setCofe([...cofe, data]);
      setIsAddModalOpen(false);
      setNewProduct({ title: "", image: "", description: "", price: "" });
      message.success("Mahsulot qo‘shildi ✅");
    } catch (error) {
      message.error("Qo‘shishda xatolik ❌");
    }
  };

  return (
    <section className="cofe">
      <div
        className="cofe-head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="cofe-title">Dessert</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Qo‘shish
        </Button>
      </div>

      <div
        className="cofe-cards"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {cofe.map((item) => (
          <Card
            key={item.id}
            style={{ width: 300 }}
            cover={
              <img
                style={{ height: 200, objectFit: "cover" }}
                draggable={false}
                alt={item.title}
                src={item.image}
              />
            }
            actions={[
              <DeleteOutlined
                key="delete"
                onClick={() => handleDelete(item.id)}
              />,
              <EditOutlined key="edit" onClick={() => handleEdit(item)} />,
            ]}
          >
            <div className="cofe-cards-item-desc">
              <p className="cofe-cards-item-desc-title">{item.title}</p>
              <p>{item.description}</p>
              <p className="cofe-cards-item-desc-price">{item.price} so'm</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal
        title="Mahsulotni tahrirlash"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={handleClose}
        okText="Saqlash"
        cancelText="Bekor qilish"
      >
        {editedProduct && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Input
              placeholder="Sarlavha"
              value={editedProduct.title}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, title: e.target.value })
              }
            />
            <Input
              placeholder="Rasm URL"
              value={editedProduct.image}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, image: e.target.value })
              }
            />
            <Input
              placeholder="Tavsif"
              value={editedProduct.description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  description: e.target.value,
                })
              }
            />
            <Input
              placeholder="Narx"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, price: e.target.value })
              }
            />
          </div>
        )}
      </Modal>
      {/* Qo‘shish uchun Modal */}
      <Modal
        title="Yangi mahsulot qo‘shish"
        open={isAddModalOpen}
        onOk={handleAddProduct}
        onCancel={() => setIsAddModalOpen(false)}
        okText="Qo‘shish"
        cancelText="Bekor qilish"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Input
            placeholder="Sarlavha"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <Input
            placeholder="Rasm URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <Input
            placeholder="Tavsif"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <Input
            placeholder="Narx"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
      </Modal>
    </section>
  );
}
