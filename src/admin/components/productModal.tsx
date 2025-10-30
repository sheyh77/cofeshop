import { Modal, Form, Input, InputNumber, Select, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void; // mahsulot qo‘shilgach, ro‘yxatni yangilash uchun
}

export default function ProductModal({ open, onClose, onSuccess }: ProductModalProps) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("type", values.type);
      if (file) formData.append("image", file);

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      message.success("Mahsulot muvaffaqiyatli qo‘shildi ✅");
      form.resetFields();
      setFile(null);
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      message.error("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Yangi mahsulot qo‘shish"
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      confirmLoading={loading}
      okText="Saqlash"
      cancelText="Bekor qilish"
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Mahsulot nomi" name="title" rules={[{ required: true, message: "Nom kiriting!" }]}>
          <Input placeholder="Masalan: Cappuccino" />
        </Form.Item>

        <Form.Item label="Narxi" name="price" rules={[{ required: true, message: "Narx kiriting!" }]}>
          <InputNumber min={1000} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Tavsif" name="description">
          <Input.TextArea rows={3} placeholder="Qisqacha tavsif..." />
        </Form.Item>

        <Form.Item label="Tur" name="type" rules={[{ required: true, message: "Tur tanlang!" }]}>
          <Select placeholder="Mahsulot turini tanlang">
            <Select.Option value="coffee">Coffee</Select.Option>
            <Select.Option value="dessert">Dessert</Select.Option>
            <Select.Option value="tea">Tea</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Rasm yuklash">
          <Upload
            beforeUpload={(file) => {
              setFile(file);
              return false;
            }}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Rasm tanlash</Button>
          </Upload>
          {file && <p style={{ marginTop: 8 }}>{file.name}</p>}
        </Form.Item>
      </Form>
    </Modal>
  );
}