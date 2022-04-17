import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Contact from "./views/Contact";
import BlogExample from "./views/BlogExample";
import Education from "./views/BlogExample";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogExample/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
