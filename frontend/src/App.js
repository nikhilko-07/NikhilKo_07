import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage.js";
import Navbar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";
import WrongPage from "./WrongPage/WrongPage.js";
import AboutPage from "./AboutPage/AboutPage.js";
import ContactPage from "./ContactPage/ContactPage.js";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
