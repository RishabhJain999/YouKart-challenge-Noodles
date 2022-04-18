import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brands from "../pages/Brands/Brands";
import Home from "../pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Brands />} />
      </Routes>
    </Router>
  );
}

export default App;
