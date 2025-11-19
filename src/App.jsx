import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import CallForPapers from "./pages/CallForPapers.jsx";
import ImpDates from "./pages/ImpDates.jsx";
import Submission from "./pages/Submission.jsx";
import Registration from "./pages/Registration.jsx";
import Accommodation from "./pages/Accommodation.jsx";
import Downloads from "./pages/Downloads";
import Publication from "./pages/Publication";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Advisory from "./pages/committee/Advisory.jsx";
import Program from "./pages/committee/Program.jsx";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImpDates />} />
          <Route path="/committee/advisory" element={<Advisory />} />
          <Route path="/committee/program" element={<Program />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
