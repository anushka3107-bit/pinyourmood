import LandingPage from "./Components/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/AfterSignIn/Home";
import Signup from "./Components/SignUp";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
