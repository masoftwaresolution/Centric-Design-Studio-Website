import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/services"; 
import Projects from "./pages/Projects";
import Studio from "./pages/studio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; 
import ScrollToTop from "./components/ScrollToTop";
function App(){
  return(
    <Router>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;