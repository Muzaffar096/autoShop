import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ScrollToTopOnNavigation from "/src/JavaScript/ScrollToTopOnNavigation.js";
import PlantCare from "./pages/PlantCare/PlantCare";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plantCare" element={<PlantCare />} />
      </Routes>
      <div className="bg-[#191E21]">
        <Footer  />
      </div>
    </BrowserRouter>
  );
}

export default App;
