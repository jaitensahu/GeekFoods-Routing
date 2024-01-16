import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Food from "./Components/Foods/Food";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />

        {/* <div className="App"> */}
        <Home />
        {/* <Food /> */}
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
