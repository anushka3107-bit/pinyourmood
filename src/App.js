import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
