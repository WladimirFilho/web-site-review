import "./App.css";
import Navigation from "./components/Navgation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AllMovies from "./pages/AllMovies";
import WishList from "./pages/WishList";
import HeroBar from "./components/HeroBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ModalLogin from "./components/ModalLogin";

function App() {
  return (
    <div>
      <HeroBar />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/allmovies" element={<AllMovies />} />
        <Route exact path="/wishlist" element={<WishList />} />
        <Route exact path="/login" element={<ModalLogin />} />
      </Routes>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
