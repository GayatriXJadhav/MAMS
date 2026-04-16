function Form({ fields, formData, setFormData, onSubmit, buttonText }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "20px"
    }}>
      {fields.map((f) => (
        <input
          key={f.name}
          name={f.name}
          placeholder={f.placeholder}
          value={formData[f.name] || ""}
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px"
          }}
        />
      ))}

      <button
        onClick={onSubmit}
        style={{
          padding: "10px",
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Form;