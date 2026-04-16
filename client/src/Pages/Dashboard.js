import { useEffect, useState } from "react";
import { getAssets } from "../Services/api";
import AssetCard from "../Components/AssetCard";

function Dashboard() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getAssets();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={fetchData}
      style={{
          padding: "10px",
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      
      >Refresh</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item, i) => (
          <AssetCard key={i} asset={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;