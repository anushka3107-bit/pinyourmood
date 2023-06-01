import LandingPage from "./Components/LandingPage";
import Sidebar from "./Components/Sidebar";
import SignUp from "./Components/SignUpPage";
import LandingPageThirdPage from "./Components/LandingPageThirdPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPageTop from "./Components/LandingPageTop";
import Filter from "./Components/Filter/CardIndex";
<<<<<<< HEAD
import SearchBar from "./Components/SearchBar";
=======
import ContentPage from "./Components/ContentPage";
>>>>>>> d11528b67c9ad7a283b97497f26b3853710edd33

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
<<<<<<< HEAD
          <Route path="/searchbar" element={<SearchBar />} />
=======
          <Route path="/contentpage" element={<ContentPage />}/>
>>>>>>> d11528b67c9ad7a283b97497f26b3853710edd33
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
