import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AddRecipe from "./pages/AddRecipe.js";
import Header from "./components/Header.js";
import ViewRecipe from "./pages/ViewRecipe.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/ViewRecipe" element={<ViewRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
