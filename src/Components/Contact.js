import React from "react";
import video from "../AboutVideo/ContactUs.mp4";
const Contact = () => {
  return (
    <section id="contact">
      <div className="Aboutus">
        <video src={video} autoPlay loop muted />
      </div>
    </section>
  );
};
export default Contact;
