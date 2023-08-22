import React from "react";
import video from "../AboutVideo/About Us.mp4";

const About = () => {
  return (
    <section id="about">
      <div className="Aboutus">
        <video src={video} autoPlay loop muted />
      </div>
    </section>
  );
};
export default About;
