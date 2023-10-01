import React from "react";
import "./skillContainer.css";
import Circles from "../Circles/Circles";
const SkillContainer = () => {
  return (
    <section className="circles-container">
      <Circles />
      <div className="about-circles-container">
        <div className="about-circles-text">
          <p className="about-me">
            <span className="text-5xl x-point">“</span>
            Hi, I'm Saleh Zabadneh, a Software Engineer Specialize in crating
            Front End applications.
            <span className="text-5xl x-point">”</span>
          </p>
          {/*    <p className="text-xl ml-20 mr-20 mt-2">
            <div className="my-skills-container">
              <span className="my-skills html">HTML </span>
              <span className="my-skills css">CSS </span>
              <span className="my-skills js">JS </span>
              <span className="my-skills react">React </span>
              <span className="my-skills next">Next </span>
              <span className="my-skills mui">MUI </span>
              <span className="my-skills tailwind"> Tailwind </span>
              <span className="my-skills bootstrap"> Bootstrap </span>
              <span className="my-skills ui-ux"> UI/UX </span>
            </div>
  </p>*/}
        </div>

        <div className="about-circles-services">
          <div className="about-service-1 service-item">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-[var(--gradient-color-center)] md:h-8 md:w-8"
            >
              <path
                d="m19 20.4 1.4-1.4 7.6 7.6V20h2v10H20v-2h6.6L19 20.4ZM13 20.4 11.6 19 4 26.6V20H2v10h10v-2H5.4l7.6-7.6ZM17 16h-2V5.8l-4.6 4.6L9 9l7-7 7 7-1.4 1.4L17 5.8V16Z"
                fill="currentFill"
              ></path>
            </svg>
            <h6>Software Devlopment</h6>
            <p>creating visalu design aasdasd af asf fadfss asd</p>
          </div>
          <div className="about-service-2 service-item ">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="6"
                width="24"
                height="3"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                x="2"
                y="20"
                width="24"
                height="3"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                x="6"
                y="2"
                width="3"
                height="24"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                x="19"
                y="2"
                width="3"
                height="24"
                rx="1.5"
                fill="currentColor"
              ></rect>
            </svg>
            <h6>Rresonsive Design </h6>
            <p>creating visalu design aasdasd af asf fadfss asd</p>
          </div>
          <div className="about-service-3 service-item">
            <svg
              width=""
              height=""
              viewBox="0 0 28 28"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9015 3.5551C17.6997 3.77683 18.167 4.60364 17.9453 5.40185L12.9453 23.4018C12.7236 24.2001 11.8967 24.6674 11.0985 24.4457C10.3003 24.2239 9.833 23.3971 10.0547 22.5989L15.0547 4.59891C15.2764 3.80071 16.1033 3.33338 16.9015 3.5551ZM9.56066 6.93972C10.1464 7.52551 10.1464 8.47525 9.56066 9.06104L4.62132 14.0004L9.56066 18.9397C10.1464 19.5255 10.1464 20.4753 9.56066 21.061C8.97487 21.6468 8.02513 21.6468 7.43934 21.061L1.43934 15.061C0.853553 14.4753 0.853553 13.5255 1.43934 12.9397L7.43934 6.93972C8.02513 6.35393 8.97487 6.35393 9.56066 6.93972ZM18.4393 6.93972C19.0251 6.35393 19.9749 6.35393 20.5607 6.93972L26.5607 12.9397C27.1464 13.5255 27.1464 14.4753 26.5607 15.061L20.5607 21.061C19.9749 21.6468 19.0251 21.6468 18.4393 21.061C17.8536 20.4753 17.8536 19.5255 18.4393 18.9397L23.3787 14.0004L18.4393 9.06104C17.8536 8.47525 17.8536 7.52551 18.4393 6.93972Z"
              ></path>
            </svg>
            <h6>Web Design & UI/UX </h6>
            <p>creating visalu design aasdasd af asf fadfss asd</p>
          </div>
          <div className="about-service-4 service-item">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="transition-transform duration-300 ease-out-bounce group-hover:translate-x-[13px] group-focus:translate-x-[13px]"
                d="M3.28125 23H0.71875L6.47656 7H9.26562L15.0234 23H12.4609L7.9375 9.90625H7.8125L3.28125 23ZM3.71094 16.7344H12.0234V18.7656H3.71094V16.7344Z"
                fill="currentColor"
              ></path>
              <path
                class="transition-transform duration-300 ease-out-bounce group-hover:translate-x-[-15px] group-focus:translate-x-[-15px]"
                d="M21.1153 23.2344C20.1466 23.2344 19.282 22.987 18.5216 22.4922C17.7664 21.9922 17.1726 21.2813 16.7403 20.3594C16.3132 19.4323 16.0997 18.3203 16.0997 17.0234C16.0997 15.7266 16.3158 14.6172 16.7481 13.6953C17.1856 12.7734 17.7846 12.0677 18.545 11.5781C19.3054 11.0885 20.1674 10.8438 21.1309 10.8438C21.8757 10.8438 22.4747 10.9688 22.9278 11.2188C23.3861 11.4635 23.7403 11.75 23.9903 12.0781C24.2455 12.4063 24.4434 12.6953 24.5841 12.9453H24.7247V11H27.0606V23H24.7794V21.1328H24.5841C24.4434 21.388 24.2403 21.6797 23.9747 22.0078C23.7143 22.3359 23.3549 22.6224 22.8966 22.8672C22.4382 23.112 21.8445 23.2344 21.1153 23.2344ZM21.6309 21.2422C22.3028 21.2422 22.8705 21.0651 23.3341 20.7109C23.8028 20.3516 24.157 19.8542 24.3966 19.2188C24.6414 18.5833 24.7637 17.8437 24.7637 17C24.7637 16.1667 24.644 15.4375 24.4044 14.8125C24.1648 14.1875 23.8132 13.7005 23.3497 13.3516C22.8861 13.0026 22.3132 12.8281 21.6309 12.8281C20.9278 12.8281 20.3419 13.0104 19.8731 13.375C19.4044 13.7396 19.0502 14.237 18.8106 14.8672C18.5763 15.4974 18.4591 16.2083 18.4591 17C18.4591 17.8021 18.5789 18.5234 18.8184 19.1641C19.058 19.8047 19.4122 20.3125 19.8809 20.6875C20.3549 21.0573 20.9382 21.2422 21.6309 21.2422Z"
                fill="currentColor"
              ></path>
            </svg>
            <h6>frontend applications</h6>
            <p>creating visalu design aasdasd af asf fadfss asd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillContainer;
