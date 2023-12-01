import React from "react";
import Aboutimg from "./../images/Aboutimg.webp";
import "./About.css"

const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <h2>About</h2>
      </div>
      <div className="about-content">
        <div className="about-img">
          <img src={Aboutimg} alt="" />
        </div>
        <div className="about-text">
          <h3 className="about-welcome">
            Hello, I'm Aidana! I welcome you to my app ReactOpedia!
            <br />
            The world of books has always fascinated me — I find solace and
            inspiration within their pages, transporting myself to any place and
            time imaginable. My favourite book is "The Little Prince" by Antoine de Saint-Exupéry.
          </h3>
          <div className="guide-section">
            <h3 className="guide-text">Let me guide you through the experience:</h3>
            <p>
              <h3 className="about-nav">Home Page:</h3> Start by searching for a book
              that piques your interest. Once the results appear, select a book
              to read its description.
              <h3 className="about-nav">More Details:</h3> Click on 'More' to delve
              deeper into the book and explore additional information.
              <h3 className="about-nav">Adding to Your Collection:</h3> If you decide
              this book is a must-read, click 'Like' to add it to your selected
              books list. This list will curate the titles you're eager to
              explore further.
              <h3 className="about-nav">Highlights Page:</h3> Navigate to the 'Highlights'
              page to conveniently view and manage your selected books list. Here,
              you'll find all the books you've liked for easy access.
            </p>
            <blockquote>
              <strong>
                “A reader lives a thousand lives before he dies. The man who
                never reads lives only one.” ― George R.R. Martin
              </strong>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
