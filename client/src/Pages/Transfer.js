import { useState } from "react";
import { transferAsset } from "../Services/api";
import Form from "../Components/Form";
import { useRole } from "../Context/RoleContext";

function Transfer() {
    const {role}=useRole()
  const [formData, setFormData] = useState({});

  const fields = [
    { name: "name", placeholder: "Asset Name" },
    { name: "fromBase", placeholder: "From Base" },
    { name: "toBase", placeholder: "To Base" },
    { name: "quantity", placeholder: "Quantity" }
  ];

  const handleSubmit = async () => {
    try {
      await transferAsset({
        ...formData,
        quantity: Number(formData.quantity)
      });

      alert("Transfer Successful");

      // reset form
      setFormData({});
    } catch (err) {
      alert("Transfer Failed");
    }
  };
  
if (role ==="Logistics") {
  return <h3>Access Denied</h3>;
}
  return (
    <div>
      <h2>Transfers</h2>

      <Form
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        buttonText="Transfer Asset"
      />
    </div>
  );
}

export default Transfer;