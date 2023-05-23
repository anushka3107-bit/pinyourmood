import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/landingpagethirdpage" element={<LandingPageThirdPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
