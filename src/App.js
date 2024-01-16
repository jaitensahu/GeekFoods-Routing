import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Food from "./Components/Food/Food";
import Restaurants from "./Components/Restaurants/Restaurants";
import Contact from "./Components/Contact/Contact";
import Quote from "./Components/Quote/Quote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
