import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
