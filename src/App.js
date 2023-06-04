import LandingPage from "./Components/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/AfterSignIn/Home";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
