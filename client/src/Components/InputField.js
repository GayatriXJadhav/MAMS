function InputField({ placeholder, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ margin: "5px", padding: "5px" }}
    />
  );
}

export default InputField;