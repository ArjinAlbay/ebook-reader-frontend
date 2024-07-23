import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        path="/underconstruction"
        element={<UnderConstruction></UnderConstruction>}
      ></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
