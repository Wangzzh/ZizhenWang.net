import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Contact from "./views/Contact";
import Education from "./views/Education";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
