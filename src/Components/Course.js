import React from "react";
import video from "../AboutVideo/Course.mp4";
const Course = () => {
  return (
    <section id="course">
      <div className="Aboutus">
        <video src={video} autoPlay loop muted />
      </div>
    </section>
  );
};
export default Course;
