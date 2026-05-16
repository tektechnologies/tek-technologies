import React from "react";

const Main: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Controls. Seamless Operations.</h1>
          <p>
            Advanced networks and data analytics for IoT management.
            Monitor, optimize, and scale with confidence.
          </p>
          <a href="#" className="cta-button">
            Find Out More
          </a>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Technology Solutions</h2>
        <div className="feature-grid">
          <div className="feature-card">
            {/* <div className="feature-icon">📊</div> */}
            <h3>IoT Devices</h3>
            <p>
              Track environmental conditions, access levels, and video views.
              metrics 24/7 with our distributed sensor network.
            </p>
          </div>
          <div className="feature-card">
            {/* <div className="feature-icon">🔬</div> */}
            <h3>Security Cameras</h3>
            <p>
              Automated tracking and reporting for regulatory requirements. Full audit trails and traceability.
            </p>
          </div>
          <div className="feature-card">
            {/* <div className="feature-icon">⚡</div> */}
            <h3>Software Development</h3>
            <p>
              We design and develop software solutions to meet your business needs. We are a team of experienced developers who are dedicated to providing the best possible software solutions to our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h4>32%</h4>
            <p>Average Cost Decreases</p>
          </div>
          <div className="stat-item">
            <h4>99.9%</h4>
            <p>System Uptime</p>
          </div>
          <div className="stat-item">
            <h4>2+</h4>
            <p>Licensed Facilitators</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Support Coverage</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Optimize Your Operation?</h2>
        <p>
          Join leading companies using IoT technology to maximize quality and efficiency.
        </p>
        <a href="#" className="cta-button">
          Schedule Consultation
        </a>
      </section>
    </>
  );
};

export default Main;
