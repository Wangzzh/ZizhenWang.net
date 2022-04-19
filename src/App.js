import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./views/Home"
import Contact from "./views/Contact";
import BlogExample from "./views/BlogExample";
import Education from "./views/Education";

import ColorSpace from "./notes/soft/graphics/foundations/ColorSpace";
import RotatingGlobe from "./notes/soft/live2d/RotatingGlobe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogExample/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />

        <Route path="/notes/soft/graphics/foundations/colorspace" element={<ColorSpace/>}/>
        <Route path="/notes/soft/live2d/rotatingglobe" element={<RotatingGlobe/>}/>
      </Routes>
    </Router>
  );
};

export default App;
