import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;