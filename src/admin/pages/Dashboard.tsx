import { useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ReportData {
  name: string;
  buyurtmalar: number;
  qabulQilingan: number;
  bekorQilingan: number;
}

export default function Dashboard() {
  const [price, setPrice] = useState<Product[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const data: ReportData[] = [
    { name: "Yanvar", buyurtmalar: 120, qabulQilingan: 100, bekorQilingan: 20 },
    { name: "Fevral", buyurtmalar: 150, qabulQilingan: 130, bekorQilingan: 25 },
    { name: "Mart", buyurtmalar: 200, qabulQilingan: 180, bekorQilingan: 10 },
    { name: "Aprel", buyurtmalar: 170, qabulQilingan: 140, bekorQilingan: 30 },
    { name: "May", buyurtmalar: 220, qabulQilingan: 190, bekorQilingan: 15 },
  ];

  const total = price.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <section className="dashboard">
      <div className="dashboard-cards">
        <div className="dashboard-cards-item">
          <p className="dashboard-cards-item-title">Jami kirim:</p>
          <h1 className="dashboard-cards-item-price">
            {total.toLocaleString()} so‘m
          </h1>
          <p className="dashboard-cards-item-grow">+10% o'tgan oydan ko'proq</p>
        </div>
        <div className="dashboard-cards-item">
          <p className="dashboard-cards-item-title">Foydalanuvchilar soni</p>
          <h1 className="dashboard-cards-item-price">12</h1>
          <p className="dashboard-cards-item-grow">+10% o'tgan oydan ko'proq</p>
        </div>
        <div className="dashboard-cards-item">
          <p className="dashboard-cards-item-title">Buyurtmalar soni</p>
          <h1 className="dashboard-cards-item-price">12.000.000</h1>
          <p className="dashboard-cards-item-grow">+10% o'tgan oydan ko'proq</p>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-5">📈 Oylik hisobot</h2>

        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="buyurtmalar"
                stroke="#6366F1"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="qabulQilingan"
                stroke="#10B981"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="bekorQilingan"
                stroke="#EF4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
