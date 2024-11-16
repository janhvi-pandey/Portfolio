import React from "react";
import Home from "./Home/Home";
import ExploreProject from "./Projects/ExploreProject";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  document.body.style.background = "#fdfefe "; // lighter complementary colors

  return (
    <div style={{width: '100%'}}>
      <Router>
        <Navbar />
        
        {/* Main content container */}
        <div className="container">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Projects Route */}
            <Route path="/projects" element={<ExploreProject />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
