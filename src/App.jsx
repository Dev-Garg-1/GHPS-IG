import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Infrastrucutre from './pages/Infrastrucutre'
import IndoGerman from './pages/IndoGerman';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Navbar */}
        <Navbar />

        {/* Social Sidebar */}
        <SocialSidebar /> {/* ✅ Add here */}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastrucutre />} />
            <Route path="/indo-german" element={<IndoGerman />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
