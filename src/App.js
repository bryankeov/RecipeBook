import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AddRecipe from "./pages/AddRecipe.js";
import Header from "./components/Header.js";
import Recipes from "./components/Recipes.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
