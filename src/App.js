import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import SignUp from "./Components/SignUpPage";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPageTop from "./Components/LandingPageTop";
import Filter from "./Components/Filter/CardIndex";
<<<<<<< HEAD
import SearchBar from "./Components/SearchBar"
=======
import SearchBar from "./Components/SearchBar";
import ContentPage from "./Components/ContentPage";

>>>>>>> baae1c7cb2b3793ac54a3645ae3d417db5a0d157

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
          <Route path="/searchbar" element={<SearchBar />} />
<<<<<<< HEAD
=======
          <Route path="/contentpage" element={<ContentPage />}/>
>>>>>>> baae1c7cb2b3793ac54a3645ae3d417db5a0d157
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
