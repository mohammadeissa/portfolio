import "./Home.css";

function Home() {

  console.log("✅ Home component loaded"); // DEBUG LINE

  return (
    <div className="hero">
      <div className="hero-content">
        <h3 className="small-title">3+ Years of Experience</h3>

        <h1 className="hero-title">
          Mohammad Eissa <span className="highlight">  Data Scientist </span>
        </h1>

        <p className="hero-text">
          I build intelligent systems using AI, data science, and sports analytics.
          My portfolio showcases work in computer vision, robotics, data modeling,
          and full-stack development.
        </p>

        <a className="resume-btn" href="/resume.pdf" download>Download Resume</a>

        <div className="social-links">
          <a href="https://github.com/mohammadeissa" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammad-eissa-1a915b2a9/" target="_blank">LinkedIn</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="circle-bg"></div>
        <img src="/profile.png" alt="profile" />
      </div>
    </div>
  );
}

export default Home;
