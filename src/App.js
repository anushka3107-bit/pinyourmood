import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import SignUp from "./Components/SignUpPage";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPageTop from "./Components/LandingPageTop";
import Filter from "./Components/Filter/CardIndex";
import Home from "./Components/Home";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageTop />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/landingpagethird" element={<LandingPageThirdPage />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
