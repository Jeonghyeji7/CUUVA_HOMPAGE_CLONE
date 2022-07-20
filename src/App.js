import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './component/nav/Navbar';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import CoreValues from './corevalues/CoreValues';
import ContactFooter from './pages/ContactFooter';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/core-values" element={<CoreValues />}></Route>
        <Route path="/contact-footer" element={<ContactFooter />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
