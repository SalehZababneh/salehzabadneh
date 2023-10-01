import "./about.css";
import tooltip from "../../img/tooltip.svg";
import personSvg from "../../img/personSvg.png";
const About = ({ homeRef }) => {
  return (
    <div className="home" ref={homeRef}>
      <div className="intro-text">
        <h1 className="intro-h1">hey there </h1>
      </div>
      <div className="intro-hero">
        <div className="hero-img">
          <p className="intro-p">Dear Datalink </p>
          <img src={tooltip} />
        </div>{" "}
        <div className="intro-container-img">
          <div className="hero-img">
            <img src={personSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
