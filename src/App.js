import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import SignUp from "./Components/SignUpPage";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPageTop from "./Components/LandingPageTop";
import CardIndex from "./Components/Filter/CardIndex";

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
          <Route path="/cardindex" element={<CardIndex />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
