import LandingPage from "./Components/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/AfterSignIn/Home";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
