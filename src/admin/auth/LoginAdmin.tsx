import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/admin-login", {
        username,
        password,
      });

      // Login muvaffaqiyatli bo'lsa tokenni saqlaymiz
      localStorage.setItem("admin_token", res.data.token);
      alert("Login muvaffaqiyatli!");
      window.location.href = "/*"; // admin panelga o'tkazish
    } catch (err) {
      console.error(err);
      alert("Login xato!");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
}