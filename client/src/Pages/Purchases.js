import { useState } from "react";
import { addPurchase } from "../Services/api";
import Form from "../Components/Form";
import { useRole } from "../Context/RoleContext";

function Purchases() {
  const [formData, setFormData] = useState({});
  const { role } = useRole();

  const fields = [
    { name: "name", placeholder: "Asset Name" },
    { name: "base", placeholder: "Base" },
    { name: "quantity", placeholder: "Quantity" }
  ];

  const handleSubmit = async () => {
  try {
    const res = await addPurchase({
      ...formData,
      quantity: Number(formData.quantity)
    });

    console.log("Response:", res.data); // 🔥 CHECK THIS
    alert("Purchase Added");

    setFormData({});
  } catch (err) {
    console.log("Error:", err.response?.data || err.message); // 🔥 VERY IMPORTANT
    alert("Failed");
  }
};
if (role !=="Admin") {
  return <h3>Access Denied</h3>;
}
  return (
    <div>
      <h2>Purchases</h2>
      <Form
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        buttonText="Add Asset"
      />
    </div>
  );
}

export default Purchases;