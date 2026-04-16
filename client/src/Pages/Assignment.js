import { useState } from "react";
import { assignAsset } from "../Services/api";
import Form from "../Components/Form";
import { useRole } from "../Context/RoleContext";

function Assignment() {
  const [formData, setFormData] = useState({});
const {role}=useRole();
  const fields = [
    { name: "name", placeholder: "Asset Name" },
    { name: "base", placeholder: "Base" },
    { name: "quantity", placeholder: "Quantity" }
  ];

  const handleSubmit = async () => {
    try {
      await assignAsset({
        ...formData,
        quantity: Number(formData.quantity)
      });

      alert("Assignment Successful");

      // reset form
      setFormData({});
    } catch (err) {
      alert("Assignment Failed");
    }
  };
  if (role ==="Commander") {
  return <h3>Access Denied</h3>;
}
  return (
    <div>
      <h2>Assignments</h2>

      <Form
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        buttonText="Assign Asset"
      />
    </div>
  );
}

export default Assignment;