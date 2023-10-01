import { useState } from "react";
import "./contact.css";

const Contact = ({ contactRef }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };
  return (
    <div className="contact-container  " ref={contactRef}>
      <div className="contact-heading ">
        <h2 className=" text-8xl  uppercase font-semibold responsive-work ">
          let's work together
        </h2>
      </div>
      <div className="contact-wrapper">
        <div className="contact-inforamtion">
          <h2>Get in touch with our team today</h2>
          <p>
            Need Any Help? Send us a message using the form below and we'll get
            back to you promptly!
          </p>
          <div className="contact-info">
            <div className="contact-info-container">
              <div className="contact-info-itme contact-info-itme-2 ">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none" />
                    </g>
                    <g id="Icons">
                      <g>
                        <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Zm-14.8,32a17.1,17.1,0,0,1-9.5-2.8L8,39.1l1.8-6.4a17.9,17.9,0,0,1-3.1-9.9A17.4,17.4,0,1,1,24.1,40.1Z" />
                        <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z" />
                      </g>
                    </g>
                  </g>
                </svg>{" "}
              </div>
              <div className="contanct-info-text">
                <h4>Say Hello</h4>
                <a
                  href="https://wa.link/wjqvau"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 50 588 4618
                </a>
              </div>
            </div>

            <div className="contact-info-container">
              <div className="contact-info-itme contact-info-itme-3">
                <svg
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="_x32_"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      class="st0"
                      d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
V385.92z"
                    />
                  </g>
                </svg>
              </div>
              <div className="contanct-info-text">
                <h4>For Emails</h4>
                <a href="mailto:saleh.zabadneh@gmail.com">
                  saleh.zabadneh@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-flashcards-text">
            <p>choose your plan </p>
          </div>
          <div className="flashcards">
            <div
              className={`flashcards-divs ${
                selectedCard === 0 ? "selected" : ""
              }`}
              onClick={() => handleCardClick(0)}
            >
              <p>software devlopment</p>
            </div>
            <div
              onClick={() => handleCardClick(0)}
              className={`flashcards-divs ${
                selectedCard === 1 ? "selected" : ""
              }`}
            >
              <p>UI/UX Web design</p>
            </div>
          </div>
          <form className="form-wrapper">
            <input type="text" className="form-input" placeholder=" name" />

            <textarea placeholder="message"></textarea>
            <button onClick={handleClick}>s</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
