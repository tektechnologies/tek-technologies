import Marquee from "react-fast-marquee";
import React from "react";

const MarqueeFooter: React.FC = () => {
  return (
    <>
      {/* Marquee Section */}
      <div className="marquee">
        <Marquee
          speed={70}
          gradient={false}
          pauseOnHover={true}
          style={{
            background: "var(--warm-gray)",
            padding: "1rem 0",
            marginTop: "1rem",
          }}
        >
          <div className="marquee-content">
            🚀 TEK Technologies IoT Solutions • Real-Time Monitoring •
            Predictive Analytics • Compliance Ready • 24/7 Support • Enterprise
            // Grade • Scalable Solutions • 🚀
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeFooter;
