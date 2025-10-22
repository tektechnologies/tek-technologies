
import './theme/index.css';

function App() {
console.log("Hi Harrison, love you!!!")
  return (
    <>
   
<body>
    <header>
        <nav>
            <div className="logo">TEK Technologies IoT</div>
            <ul className="nav-links">
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section className="hero">
        <div className="hero-content">
            <h1>Precision Cultivation Through IoT</h1>
            <p>Advanced sensor networks and data analytics for IoT management. Monitor, optimize, and scale with confidence.</p>
            <a href="#" className="cta-button">Request Demo</a>
        </div>
    </section>

    <section className="features">
        <h2 className="section-title">Enterprise Iot Solutions</h2>
        <div className="feature-grid">
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Real-Time Monitoring</h3>
                <p>Track environmental conditions, nutrient levels, and plant health metrics 24/7 with our distributed sensor network.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">🔬</div>
                <h3>Compliance Ready</h3>
                <p>Automated tracking and reporting for regulatory requirements. Full audit trails and batch traceability.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Predictive Analytics</h3>
                <p>Machine learning models identify issues before they impact yield. Optimize building cycles and resource allocation.</p>
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
                <h4>50+</h4>
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
        <p>Join leading companies using IoT technology to maximize quality and efficiency.</p>
        <a href="#" className="cta-button">Schedule Consultation</a>
    </section>

    <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h4>Products</h4>
                <ul>
                    <li><a href="#">Video Systems</a></li>
                    <li><a href="#">Internet of Things Devices</a></li>
                    <li><a href="#">Internet Services in select markets</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">White Papers</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 TEK Technologies IoT. All rights reserved.</p>
        </div>
    </footer>
</body>

    </>
  )
}

export default App


