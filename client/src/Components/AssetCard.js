function AssetCard({ asset }) {
  return (
<div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px",
      margin:"2px"
    }}>
      <h3>{asset.name}</h3>
      <p>Base: {asset.base}</p>
      <p>Quantity: {asset.quantity}</p>
    </div>
  );
}

export default AssetCard;