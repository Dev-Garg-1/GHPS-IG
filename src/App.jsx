import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Layout, Home, About, Infrastructure, IndoGerman, Activities, ProudMoments, AlumniForm, Achievements, ComingSoon, NotFound} from "./pages";
import { Loader } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/indo-german" element={<IndoGerman />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/proud-moments" element={<ProudMoments />} />
            <Route path="/alumni-form" element={<AlumniForm />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/newsletter" element={<ComingSoon />} />
            <Route path="/circulars" element={<ComingSoon />} />
            <Route path="/resource" element={<ComingSoon />} />
            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
