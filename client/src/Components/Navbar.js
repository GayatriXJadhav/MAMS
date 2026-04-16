import { Link } from "react-router-dom";
import { useRole } from "../Context/RoleContext";

function Navbar() {
  const { role, updateRole } = useRole();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#111",
      color: "white"
    }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link style={{ color: "white" }} to="/">Dashboard</Link>
        <Link style={{ color: "white" }} to="/purchases">Purchases</Link>
        <Link style={{ color: "white" }} to="/transfers">Transfers</Link>
        <Link style={{ color: "white" }} to="/assignments">Assignments</Link>
      </div>

      <select
        value={role}
        onChange={(e) => updateRole(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option>Admin</option>
        <option>Commander</option>
        <option>Logistics</option>
      </select>
    </div>
  );
}

export default Navbar;