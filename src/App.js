import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import CollectionDetailing from "./CollectionDetailing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/CollectionDetailing/:category" element={<CollectionDetailing />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// dark grey - #8b857c
// golden color - #d2b986
