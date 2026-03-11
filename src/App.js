import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLandingPage from "./MainLandingPage";
import CollectionDetailing from "./CollectionDetailing";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/CollectionDetailing/:category" element={<CollectionDetailing />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// dark grey - #8b857c
// golden color - #d2b986
