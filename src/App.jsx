import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"; // 👈 Import your layout
import Home from "./pages/Home";
import About from "./pages/About";
import Infrastrucutre from "./pages/Infrastrucutre";
import IndoGerman from "./pages/IndoGerman";
import Activities from "./pages/Activities";
import ProudMoments from "./pages/ProudMoments";
import AlumniForm from "./pages/AlumniForm";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Route Wraps All Pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infrastructure" element={<Infrastrucutre />} />
          <Route path="/indo-german" element={<IndoGerman />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/proud-moments" element={<ProudMoments />} />
          <Route path="/alumni-form" element={<AlumniForm />} />
          <Route path="/achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
