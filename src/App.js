import "./App.css";
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Generate from "./views/Generate";
import Gallery from "./views/Gallery";
import Playground from "./views/Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='generate' element={<Generate />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='playground' element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
