import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Concert from "./pages/concert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/concert/:concertId" element={<Concert />} />
    </Routes>
  );
}

export default App;
