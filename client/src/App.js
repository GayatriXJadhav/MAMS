import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Purchases from "./Pages/Purchases";
import Transfers from "./Pages/Transfer";
import Assignments from "./Pages/Assignment";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
     <Layout>
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;