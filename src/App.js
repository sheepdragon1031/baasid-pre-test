
import {
  Routes,
  Route
} from "react-router-dom"

import Index from "./pages/index.js";
import FoodMenu from "./pages/foodmenu";
import Resturant from "./pages/resturant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="foodmenu" element={<FoodMenu />} />
      <Route path="resturanttwocolumn" element={<Resturant />} />
    </Routes>
  );
}

export default App;
