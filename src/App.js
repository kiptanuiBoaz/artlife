import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Programs from "./pages/programs/Programs";
import Research from "./pages/research/Research";
import Events from "./pages/events/Events";
import Involved from "./pages/involved/Involved";
import RegistrationForm from "./pages/involved/RegistrationForm";
import ArtLifeAwards from "./pages/events/ArtLifeAwards";
import NaiFest from "./pages/events/NaiFest";
import Westalife from "./pages/events/WestAFest";
import KeepItLit from "./pages/events/KeepItLit";
import { PdfDisp } from "./pages/home/PdfDisp";
import naifest from "./pages/home/assets/naifest.pdf";
import keepitLit from './pages/home/assets/keepitlit.pdf';
import artlifeHome from "./pages/home/assets/artlife-home.pdf"
import ArtlifeHood from "./pages/programs/ArtlifeHood";
import ArtlifeBluRoom from "./pages/programs/ArtlifeBluRoom";
import WorkSeries from "./pages/programs/WorkSeries";
import Contact from "./pages/contact/asset/Contact";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Layout } from "./Layout";
import Team from "./components/team/Team"
import TeamWork from "./pages/TeamWork";





function App() {
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      {/* Sccrolll up button */}
      {/* <ScrollUp /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/research" element={<Research />} />
            <Route path="/events" element={<Events />} />
            <Route path="/involved" element={<Involved />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/team" element={<TeamWork />} />

            <Route path="/artlifehood" element={<ArtlifeHood />} />
            <Route path="/artlifebluroom" element={<ArtlifeBluRoom />} />
            <Route path="/workseries" element={<WorkSeries />} />

            <Route path="/pdf/naifest" element={<PdfDisp pdfFile={naifest} />} />
            <Route
              path="/pdf/keep-it-lit"
              element={<PdfDisp pdfFile={keepitLit} />}
            />
            <Route
              path="/pdf/artlife"
              element={<PdfDisp pdfFile={artlifeHome} />}
            />

            <Route path="/artlife" element={<ArtLifeAwards />} />
            <Route path="/naifest" element={<NaiFest />} />
            <Route path="/westalife" element={<Westalife />} />
            <Route path="/keepitlit" element={<KeepItLit />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>

          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
