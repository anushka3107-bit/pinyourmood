import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUpPage";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/landingpagethird" element={<LandingPageThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
