import "./App.css";
import "@fontsource/inter";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Generate from "./views/Generate";
import Gallery from "./views/Gallery";
import Playground from "./views/Playground";
import Publish from "./views/Generate/Publish";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/publish' element={<Publish wyf="I'm tired" />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/playground' element={<Playground />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
