import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("register");


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://backendcofe-production.up.railway.app/api/auth/register", {
        username,
        phone,
        password,
      });
      alert("Ro‘yxatdan o‘tish muvaffaqiyatli ✅");
      window.location.href = "/";
    } catch (err: any) {
      alert(err.response?.data?.message || "Xatolik yuz berdi");
    }
  };

  return (
    <section className="login">
      <div className="login-page">
        <div className="login-register">
          <Link to="/login" className="login-register-link">
            <button
              className={`login-register-btn ${
                active === "login" ? "active" : ""
              }`}
              onClick={() => setActive("login")}
            >
              Kirish
            </button>
          </Link>
          <Link to="/register" className="login-register-link">
            <button
              className={`login-register-btn ${
                active === "register" ? "active" : ""
              }`}
              onClick={() => setActive("register")}
            >
              Ro'yhatdan o'tish
            </button>
          </Link>
        </div>
        <form onSubmit={handleRegister} className="login-form">
          <h2 className="login-form-title">Ro'yhatdan o'tish</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="login-register-inp"
          />
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            onChange={(e) => setPhone(e.target.value)}
            className="login-register-inp"
          />
          <input
            type="password"
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)}
            className="login-register-inp"
          />
          <button type="submit" className="login-btn">
            Ro'yhatdan o'tish
          </button>
          <div className="login-desc">
            <div className="login-desc-hr"></div>
            <p className="login-sub">since 2025</p>
            <div className="login-desc-hr"></div>
          </div>
        </form>
      </div>
    </section>
  );
}
