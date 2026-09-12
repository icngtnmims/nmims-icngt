import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Committee from "./pages/Committee.jsx";
import CallForPapers from "./pages/CallForPapers.jsx";
import Publication from "./pages/Publication";
import Submission from "./pages/Submission.jsx";
import ImpDates from "./pages/ImpDates.jsx";
import Registration from "./pages/Registration.jsx";
import Accommodation from "./pages/Accommodation.jsx";
import Downloads from "./pages/Downloads";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Advisory from "./pages/committee/Advisory.jsx";
import Organizer from "./pages/committee/Organizer.jsx";
import Technical from "./pages/committee/Technical.jsx";
import Governance from "./pages/committee/Governance.jsx";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/governance" element={<Governance />} />
          <Route path="/committee/advisory" element={<Advisory />} />
          <Route path="/committee/organizer" element={<Organizer />} />
          <Route path="/committee/technical" element={<Technical />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/important-dates" element={<ImpDates />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
