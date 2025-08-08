import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Programs from "./components/page/programs";
import Home from "./components/page/Home";
import Footer from "./components/Footer";
import Experienced from "./body/Experienced";
import Modern from "./body/Modern";
import Career from "./body/Career";
import Placement from "./body/Placement";
import Location from "./body/Location";
import Industry from "./body/Syallabus";


function App() {
  return (
    <nav>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Experienced" element={<Experienced />} />
          <Route path="/Modern" element={<Modern />} />
          <Route path="/Career" element={<Career/>} />
         <Route path="/Placement" element={<Placement/>} />
         <Route path="/Location" element= {<Location/>} />
         <Route path="/Industry" element= {<Industry/>} />
      </Routes>
      <Footer/>
    </nav>
  );
}

export default App;
