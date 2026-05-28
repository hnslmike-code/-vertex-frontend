import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://51.21.135.162:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>VERTEX LOGIN</h1>

      <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}
