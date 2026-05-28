import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(`http://51.21.135.162:5000/dashboard/${user._id}`)
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>VERTEX DASHBOARD</h1>

      <h2>Balance: ${data.user.balance}</h2>
      <h2>Profit: ${data.user.totalProfit}</h2>

      <h3>Transactions</h3>
      {data.tx.map((t, i) => (
        <p key={i}>{t.type} - ${t.amount}</p>
      ))}
    </div>
  );
}
