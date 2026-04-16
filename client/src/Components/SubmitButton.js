function SubmitButton({ text, onClick }) {
  return (
    <button onClick={onClick} style={{
          padding: "10px",
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
      {text}
    </button>
  );
}

export default SubmitButton;