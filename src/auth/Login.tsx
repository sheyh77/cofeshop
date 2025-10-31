import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("login");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://backendcofe-production.up.railway.app/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user_token", res.data.token);
      alert("Kirish muvaffaqiyatli ✅");
      window.location.href = "/"; // asosiy sahifaga yo‘naltirish
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
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="login-form-title">Kirish</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="login-register-inp"
          />
          <input
            type="password"
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)}
            className="login-register-inp"
          />
          <button type="submit" className="login-btn">Kirish</button>
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