import React, { useEffect, useRef, useState } from "react";
import WorkContainer from "../WorkContainer/WorkContainer";
import popcornimg from "../../img/popcornimg.png";
import noise from "../../img/noise.png";
import Frame3 from "../../img/Frame3.jpg";
import socialMediaPlatform from "../../img/socialMediaPlatform.jpg";
import shop from "../../img/shop.jpg";

import munasabat1 from "../../img/munasabat1.png";
import tripApp from "../../img/tripApp.png";
import workImg1 from "../../img/workImg1.jpg";
const Work = ({ Portfolio }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent"); // Initial background color
  const [textColor, setTextColor] = useState("#000000"); // Initial text color

  const prevScrollY = useRef(0);

  const scrollHandler = () => {
    const scrollY = window.scrollY;

    // Define scroll positions for background color changes
    const scrollPositions = [1900, 2350, 2970, 4800];

    // Define corresponding background colors
    const backgroundColors = ["#171717", "#000000", "#B6DBD0", "#fbe274"];

    // Find the current background color based on scroll position
    let currentColor = backgroundColor;
    for (let i = 0; i < scrollPositions.length; i++) {
      if (scrollY >= scrollPositions[i]) {
        currentColor = backgroundColors[i];
      }
    }

    // Reset to transparent background if scrolling up beyond the initial position
    if (
      scrollY < scrollPositions[0] &&
      prevScrollY.current >= scrollPositions[0]
    ) {
      currentColor = "transparent";
    }

    // Update the background color state and save current scroll position
    setBackgroundColor(currentColor);
    prevScrollY.current = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [backgroundColor]);

  return (
    <div
      className="bg-red-100 pt-20 pb-20 xxx"
      ref={Portfolio}
      style={{ backgroundColor, transition: "background-color 1s ease" }}
    >
      <div className="between-section ">
        <h1 className=" text-8xl text-center uppercase font-semibold responsive-work">
          work projects{" "}
        </h1>
      </div>
      <WorkContainer
        height="488px"
        width="1054px"
        backgroundColor="#171717"
        textColor="black"
        borderRadius="16px"
        margin="40px auto"
        padding="45px"
        className="main-project main-project-1 "
      >
        <div className="project-heading">
          <h1 className="">yoctofy project</h1>
          <p className="">
            {" "}
            Yoctofy agency website developet by Implementing UI/UX desing into
            Next.js project and creating server/client reusable component using
            react js{" "}
          </p>
          <a className="">project detail</a>
        </div>

        <div className="project-img">
          <img src={Frame3} alt="" />
        </div>
      </WorkContainer>
      <WorkContainer
        height="488px"
        width="1054px"
        backgroundColor="#171717"
        textColor="black"
        margin="80px auto"
        padding="45px"
        className="main-project main-project-2 "
      >
        <div className="project-img">
          <img src={munasabat1} alt="" />
        </div>
        <div className="project-heading project-heading-1">
          <h1 className="">Munasabat Project </h1>
          <p className="project">
            web application for Hall management system to book halls online with
            2 dashboard.
          </p>
          <a className="">project detail</a>
        </div>
      </WorkContainer>

      <WorkContainer
        height="60vh"
        width="1064px"
        backgroundColor="#B6DBD0"
        textColor="black"
        borderRadius="40px"
        margin="40px auto"
        padding="40px"
        className="personal-project personal-project-1 "
      >
        {" "}
        <div className="between-section ">
          <h1 className=" text-8xl text-center uppercase font-semibold responsive-work mt-10 mb-10">
            personal projects
          </h1>
        </div>
      </WorkContainer>
      <WorkContainer
        height="80vh"
        width="1064px"
        backgroundColor="#010001"
        textColor="black"
        borderRadius="40px"
        margin="80px auto"
        padding="40px"
        className="personal-project personal-project-1 "
      >
        {" "}
        <div className="project-heading project-heading-1">
          <h1 className="">Popconrn App </h1>
          <p className="project">
            react application that provides users with a way to explore movies,
            rate them, and manage their watched movies list. By leveraging the
            OMDB API
          </p>
          <a className="">project detail</a>
        </div>
        <div className="project-img">
          <img src={popcornimg} alt="" />
        </div>
      </WorkContainer>
      <WorkContainer
        height="80vh"
        width="1064px"
        backgroundColor="transparent"
        textColor="black"
        borderRadius="40px"
        margin="80px auto"
        padding="0"
        className="personal-project personal-project-1 "
      >
        <WorkContainer
          height="100%"
          width="50%"
          backgroundColor="#19624c"
          borderRadius="40px"
          textColor="black"
          className="inner-personal-project inner-personal-project-1 "
        >
          <div className="project-img">
            <img src={socialMediaPlatform} alt="" />
          </div>
          <div className="project-heading project-heading-1">
            <h1 className="">Natours </h1>
            <p className="project">
              React application for social media content
            </p>
            <a className="">project detail</a>
          </div>
        </WorkContainer>
        <WorkContainer
          height="100%"
          width="50%"
          backgroundColor="#DFE8E5"
          textColor="black"
          borderRadius="40px"
          margin="0 0 0 15px"
          padding="10px"
          className="inner-personal-project inner-personal-project-2 "
        >
          <div className="project-heading project-heading-2">
            <h1 className="">Home Shop </h1>
            <p className="project">
              Responsive e-commerce app using React.js and TailwindCss
            </p>
            <a className="">project detail</a>
          </div>
          <div className="project-img">
            <img src={shop} alt="" />
          </div>
        </WorkContainer>
      </WorkContainer>
      <WorkContainer
        height="80vh"
        width="1064px"
        backgroundColor="#fbe274"
        textColor="black"
        borderRadius="40px"
        margin="80px auto"
        padding="40px"
        className="personal-project personal-project-2 "
      >
        <div className="project-img">
          <img src={tripApp} alt="" />
        </div>
        <div className="project-heading project-heading-2">
          <h1 className="">Traveling</h1>
          <p className="project">
            Traveling app is a react responsive website to schedule traveling
            and back a list of trips
          </p>
          <a className="">project detail</a>
        </div>
      </WorkContainer>
    </div>
  );
};

export default Work;
