import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./Cards/HomePage";
import Shop from "./Cards/Shop";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
