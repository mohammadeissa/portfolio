import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Business from "./Business";
import ThemeToggle from "./context/ThemeToggle";


function App() {
  return (
    <Router basename="/">
      <nav
        style={{
          padding: "15px",
          background: "var(--bg-color)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link style={{ color: "var(--text-color)", marginRight: "20px" }} to="/">Home</Link>
          <Link style={{ color: "var(--text-color)", marginRight: "20px" }} to="/about">About</Link>
          <Link style={{ color: "var(--text-color)", marginRight: "20px" }} to="/projects">Projects</Link>
          <Link style={{ color: "var(--text-color)", marginRight: "20px" }} to="/business">Business</Link>
          <Link style={{ color: "var(--text-color)" }} to="/contact">Contact</Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <a href="https://github.com/mohammadeissa" target="_blank" rel="noreferrer" style={{ color: "#61dafb" }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohammad-eissa-1a915b2a9/" target="_blank" rel="noreferrer" style={{ color: "#61dafb" }}>
            LinkedIn
          </a>
          <ThemeToggle /> {/* 🆕 Add this */}
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </Router>
  );
}

export default App;
