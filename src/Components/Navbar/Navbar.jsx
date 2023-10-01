import Logo from "../Logo/Logo";
import NavigationLinks from "../NavbarLinks/NavbarLinks";
import "./navbar.css";
const Navbar = ({
  logoText,
  links,
  activeLink,
  onLinkClick,
  collapsed,
  toggleNavbar,
}) => {
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-100">
      <nav
        // onClick={toggleNavbar}
        className={`  ${
          collapsed ? "collapsed" : "expanded "
        }  rounded-2xl mx-auto navbar`}
      >
        <div className="nav-con flex justify-between  items-center  pl-3 pr-3 pt-1 pb-1 ">
          <Logo logoText={logoText} />
          <NavigationLinks
            links={links}
            activeLink={activeLink}
            onLinkClick={onLinkClick}
          />
          <svg
            className={`${
              collapsed
                ? "rotate-90 transition-transform duration-200"
                : "rotate-45 transition-transform duration-200 "
            }`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleNavbar}
          >
            <path d="M12 24L12 0" stroke="currentColor" stroke-width="2"></path>
            <path d="M24 12H0" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>

        {!collapsed && (
          <div
            className={`nav-big-container ${
              collapsed ? "fade-out" : "fade-in"
            }`}
          >
            <span className="navbar-line"></span>
            <div className="nav-big-content">
              <ul className=" list nav-list-1">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>

                <li>Contact</li>
              </ul>
              <ul className="list nav-list-2">
                <li>Projects</li>
                <li>Yoctofy</li>
                <li>Munasabat </li>

                <li>Natours</li>
              </ul>
              <ul className="list nav-list-3">
                <li>Social</li>
                <a
                  className="social-links"
                  href="https://www.instagram.com/saleh_juma1/"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="social-links"
                  href="https://www.facebook.com/saleh.jz/"
                  target="_blank"
                >
                  Facebook
                </a>

                <a
                  className="social-links"
                  href="https://www.linkedin.com/in/saleh-zabadneh/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </ul>
              <div className="list nav-list-4">
                <a
                  className="nav-btn"
                  href="https://wa.link/wjqvau"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say hello
                </a>

                <svg
                  fill="none"
                  height="116"
                  viewBox="0 0 133 116"
                  width="133"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3605 16.5494C22.7205 16.6994 23.6305 16.9394 24.1705 15.9194C24.2205 15.8294 24.1905 15.7094 24.0905 15.6594C23.7105 15.4494 22.7105 15.0594 22.2505 16.3094C22.2105 16.4094 22.2505 16.5094 22.3605 16.5494ZM130.85 104.089C131.09 103.729 131.26 103.329 131.37 102.899C131.65 101.839 131.5 100.739 130.94 99.7894L114.11 71.1494C112.96 69.2094 110.45 68.5494 108.5 69.6994L99.4205 75.0394L81.1305 43.9194C80.9305 42.5694 80.2305 40.8294 78.1305 39.7594C77.4105 39.3894 76.6005 39.1694 75.7305 39.0994L74.3305 38.9794C74.0105 38.9494 73.7105 38.9494 73.4205 38.9494C72.7905 38.9494 72.2405 38.9494 71.7605 38.6794L71.9205 38.3294C72.0905 37.9494 72.0005 37.5094 71.6905 37.2294C70.2605 35.9394 65.4005 31.6394 62.6505 30.2294C59.6605 28.7094 48.6705 24.8294 47.5505 24.4294C44.1505 22.0294 40.6705 22.8694 39.4305 23.2894C39.4305 23.2894 38.7905 21.7294 37.5405 21.4094C37.0605 21.2894 36.6005 21.2994 36.2005 21.3694C36.2705 21.3094 36.3205 21.2494 36.3705 21.1894C36.9005 20.5394 37.3905 19.8794 37.8405 19.2094C39.4605 19.4694 40.6805 19.5194 41.3505 19.5194H41.7405C41.9705 19.5094 42.1905 19.3894 42.3305 19.1994C42.4705 18.9994 42.5005 18.7594 42.4305 18.5294C41.5705 15.7694 40.6405 13.6394 40.3905 13.0994C40.6105 8.60939 39.4305 5.03939 39.3805 4.88939L39.3305 4.73939L39.2005 4.63939C33.4605 -0.160615 26.1405 1.14939 25.8305 1.20939H25.7305L25.6505 1.26939C24.0805 2.15939 22.6505 3.73939 21.4005 5.97939C20.6905 7.24939 20.2505 8.36939 20.0805 8.82939C18.6005 9.62938 17.2105 10.7794 16.3005 11.6194C15.9305 11.9494 15.8105 12.4694 15.9805 12.9294C16.1505 13.3894 16.5705 13.7094 17.0605 13.7294C17.9905 13.7694 19.0805 13.8294 20.1605 13.9394C20.0605 14.8094 20.1005 15.5494 20.1605 16.0494C20.2005 16.4094 20.1205 16.7594 19.9305 17.0594C19.9005 17.1094 19.8705 17.1594 19.8405 17.1994C19.3305 18.0694 19.2905 19.1294 19.7405 20.0394C20.7205 22.0194 21.6805 23.4694 22.6705 24.4394C23.4905 25.2494 24.7105 25.4794 25.7705 25.0394L27.9105 24.1494H27.9305C28.4105 24.6594 28.7305 25.3994 28.8905 25.7894C28.2405 26.6894 28.2605 27.6894 28.4605 28.3894C25.5705 30.5294 25.7205 34.3894 25.7505 34.8194C25.7005 36.4794 25.1405 40.9494 23.1705 42.1794C21.5205 43.2194 17.1605 42.7994 13.6405 42.0694C13.3305 41.9994 13.0205 42.0794 12.7905 42.2794C12.6505 42.3994 12.5405 42.5494 12.4905 42.7294C11.7205 42.6294 10.5205 42.4994 9.14046 42.4694C5.91046 42.3994 3.34046 42.8494 1.49046 43.8294C1.13046 44.0194 0.940456 44.4194 1.01046 44.8194C1.19046 45.7694 2.07046 48.8994 5.64046 49.5094C5.98046 49.5694 6.33046 49.5994 6.68046 49.5994C7.16046 49.5994 7.65046 49.5494 8.14046 49.4394L9.51046 49.1394C9.82046 49.0694 10.1105 48.9794 10.3905 48.8994C11.0205 48.7094 11.5505 48.5394 12.1205 48.6794C12.3005 48.7294 12.4605 48.7794 12.6205 48.8394L12.6605 50.1194C12.6805 50.5494 12.9705 50.9294 13.3905 51.0494C14.8305 51.4594 22.2105 53.5294 26.2505 53.7294C29.5705 53.8994 32.0305 52.0594 33.2305 50.8994L33.3905 51.8094C33.6505 53.3694 34.2105 54.2494 34.5605 54.6594L30.9405 67.2294C30.7905 67.7494 30.9005 68.2894 31.1405 68.7794C31.4605 69.4294 32.4705 69.7094 32.5005 69.7194C31.7105 71.9794 27.9805 82.7394 24.2605 96.9894C24.1605 97.3794 24.3205 97.7994 24.6705 98.0194C24.9105 98.1794 25.2705 98.3894 25.8205 98.6694C25.5205 99.5694 25.1805 100.439 24.7905 101.249C24.5705 101.709 24.3605 102.109 24.1705 102.439C23.4205 103.709 20.7105 103.739 18.3205 103.759C16.6205 103.769 15.0105 103.789 13.8205 104.179C11.2405 105.019 10.7705 107.379 10.6905 108.349C10.6405 108.869 10.9605 109.339 11.4505 109.499L28.8405 115.059C28.9805 115.109 29.1205 115.129 29.2605 115.129C29.4805 115.129 29.6905 115.079 29.8805 114.979C30.2005 114.809 30.4405 114.529 30.5505 114.179L34.6805 101.299C35.1605 101.339 35.5705 101.349 35.9005 101.349C36.1205 101.349 36.3105 101.349 36.4505 101.329C36.8305 101.309 37.1605 101.069 37.2905 100.719L48.6805 70.2794C49.0005 72.5394 49.6005 76.0094 50.5805 79.5494C51.3105 82.1894 53.3305 84.3794 56.1105 85.5594C58.1805 86.4294 63.1205 86.8494 71.5405 86.8494C72.7905 86.8494 74.1105 86.8494 75.5105 86.8194C75.8805 86.8194 76.1905 86.6494 76.3605 86.3694C76.4805 86.1694 76.6405 85.8894 76.8205 85.5494C77.8305 85.7094 78.8005 85.9294 79.7205 86.1994C80.2105 86.3394 80.6405 86.4794 80.9905 86.6294C82.3605 87.1694 82.8105 89.8394 83.2105 92.1894C83.4905 93.8694 83.7605 95.4494 84.3305 96.5594C85.4305 98.6794 87.4005 99.0194 88.5305 99.0194H88.5405C88.7005 99.0194 88.8305 99.0194 88.9405 99.0094C89.4605 98.9694 89.8805 98.5794 89.9605 98.0694L92.7105 80.0194C92.8305 79.2794 92.3205 78.5894 91.5805 78.4794L79.8005 76.6994C79.8205 76.5994 79.8205 76.4994 79.8305 76.3994C79.8605 75.9894 79.6105 75.6094 79.2105 75.4694C78.7605 75.2994 74.5205 73.8594 64.1905 72.7794L63.3405 63.2294C63.9905 62.9494 64.5005 62.7094 64.8605 62.5394C65.4905 62.2394 65.8005 61.5194 65.5905 60.8594C65.2405 59.7394 64.5805 57.5994 63.8805 55.3194C65.0105 52.9294 65.7705 50.4294 66.0105 48.1394C66.5805 42.7994 63.2205 41.8794 58.5705 40.6094H58.5505V39.0794C59.4905 39.2994 60.3405 39.4994 60.8405 39.6294C62.3605 40.0394 63.9005 41.6394 63.9105 41.6594L63.9405 41.6794L67.6805 44.7594C67.9105 44.9494 68.2105 45.0194 68.5005 44.9494C68.7905 44.8894 69.0305 44.6894 69.1505 44.4194L69.3005 44.0794C69.9705 44.3994 71.2105 44.9494 72.7205 45.4594C74.9405 46.1994 76.9205 46.5694 78.6205 46.5694C78.9005 46.5794 79.1805 46.5694 79.4405 46.5494L97.0305 76.4794C95.3605 77.6894 94.8505 80.0194 95.9205 81.8394L112.76 110.479C113.31 111.419 114.2 112.099 115.26 112.369C115.6 112.459 115.95 112.499 116.3 112.499C116.41 112.509 116.53 112.499 116.64 112.479C116.59 112.659 116.56 112.859 116.56 113.059C116.56 114.219 117.5 115.149 118.66 115.149C119.82 115.149 120.75 114.219 120.75 113.059C120.75 112.249 120.29 111.539 119.62 111.199L128.63 105.899C128.62 105.989 128.61 106.079 128.61 106.179C128.61 107.329 129.55 108.269 130.71 108.269C131.87 108.269 132.81 107.329 132.81 106.179C132.81 105.029 131.95 104.159 130.85 104.089ZM12.4005 47.5794C11.5205 47.3594 10.7805 47.5894 10.0605 47.8094C9.80046 47.8894 9.54046 47.9694 9.27046 48.0294L7.90046 48.3294C7.18046 48.4794 6.49046 48.4994 5.84046 48.3894C3.16046 47.9294 2.37046 45.6694 2.17046 44.7694C5.42046 43.1394 10.5505 43.6194 12.4605 43.8794L12.5805 47.6294C12.5205 47.6094 12.4605 47.5994 12.4005 47.5794ZM29.4705 113.839C29.4405 113.909 29.3905 113.949 29.3605 113.959C29.3305 113.979 29.2705 113.999 29.2005 113.979L11.8305 108.419C11.9105 107.489 12.3305 105.869 14.1805 105.259C15.2005 104.929 16.7205 104.909 18.3305 104.899C21.1505 104.869 24.0705 104.849 25.1505 103.019C25.3005 102.769 25.4505 102.479 25.6105 102.169L32.5005 104.369L29.4705 113.839ZM32.8405 103.289L26.1005 101.129C26.3905 100.489 26.6405 99.8294 26.8605 99.1394C27.6005 99.4694 28.5305 99.8294 29.6905 100.229C31.1405 100.719 32.4405 101.009 33.5205 101.169L32.8405 103.289ZM81.5805 78.1194L91.4105 79.5994C91.5205 79.6194 91.6105 79.7294 91.5905 79.8494L88.8405 97.8694C87.9005 97.9294 86.2405 97.7794 85.3505 96.0494C84.8505 95.0894 84.6005 93.5894 84.3305 92.0094C83.8705 89.2194 83.3805 86.3494 81.4105 85.5694C81.1405 85.4594 80.8405 85.3494 80.5005 85.2494L81.5805 78.1194ZM79.6605 77.8294L80.4505 77.9494L79.3905 84.9294C78.7405 84.7494 78.0605 84.6094 77.3705 84.4894C78.2105 82.7994 79.2405 80.3494 79.6605 77.8294ZM17.1105 12.5894C17.1105 12.5894 17.0605 12.5794 17.0505 12.5394C17.0305 12.4894 17.0605 12.4594 17.0705 12.4494C17.9105 11.6794 19.1705 10.6194 20.5105 9.88939C20.6105 9.82938 20.7005 9.77938 20.8005 9.72938L21.0005 9.62938L21.0805 9.40938C21.0805 9.40938 21.3305 8.68939 21.7905 7.70939C22.5905 6.02939 24.0405 3.51939 26.1205 2.30939C26.9605 2.17939 33.3705 1.34939 38.3405 5.39939C38.5105 5.93939 39.0605 7.91939 39.2205 10.5194C39.2805 11.3494 39.2905 12.2494 39.2405 13.1794V13.3194L39.2905 13.4494C39.2905 13.4594 39.5805 14.0694 39.9805 15.0694C40.3205 15.9294 40.7605 17.0794 41.1805 18.3794C40.6005 18.3694 39.6905 18.3294 38.5105 18.1694C37.3305 18.0094 35.9005 17.7294 34.2505 17.2494C32.9705 16.8694 31.5805 16.2694 30.1105 15.6294C28.0805 14.7494 25.9805 13.8394 23.7005 13.3094C23.2305 13.1994 22.7105 13.0994 22.1705 13.0194C21.9305 12.9894 21.6905 12.9594 21.4405 12.9294C21.0705 12.8794 20.6905 12.8394 20.3105 12.8094C19.1905 12.6894 18.0605 12.6294 17.1105 12.5894ZM28.7805 23.3794C28.4505 23.0094 27.9205 22.8994 27.4705 23.0994L25.3305 23.9894C24.6905 24.2594 23.9605 24.1194 23.4705 23.6294C23.1905 23.3594 22.9105 23.0394 22.6405 22.6694C23.2605 22.4094 23.3305 21.6994 23.3305 21.3594C23.3305 21.2494 23.2405 21.1494 23.1305 21.1494C22.5205 21.1494 22.1705 21.3794 21.9405 21.6594C21.5505 21.0494 21.1605 20.3394 20.7605 19.5394C20.4805 18.9694 20.5105 18.3194 20.8205 17.7894C20.8405 17.7494 20.8705 17.7194 20.8905 17.6794C21.2205 17.1594 21.3605 16.5394 21.3005 15.9294C21.2505 15.4794 21.2105 14.8194 21.3005 14.0594C22.0805 14.1494 22.8105 14.2694 23.4405 14.4194C24.6105 14.6894 25.7505 15.0794 26.8505 15.5094C26.9805 15.6894 27.0905 15.8794 27.1905 16.0794C27.5305 16.7694 27.8705 17.5294 28.2105 18.3094C28.9405 19.9894 30.7505 21.2494 32.1305 22.0094C32.6905 22.3094 33.3105 22.4594 33.9205 22.4194C32.7905 23.0794 31.0605 24.1094 29.8305 24.9094C29.8105 24.9194 29.7905 24.9394 29.7705 24.9494C29.5505 24.4794 29.2205 23.8694 28.7805 23.3794ZM64.8805 48.0194C64.6905 49.8194 64.1605 51.7694 63.3705 53.6694C62.6105 55.5194 61.5905 57.3394 60.4005 58.9594C58.0205 62.2094 55.2705 64.2094 53.0605 64.2994C51.4205 64.3594 49.5305 63.5194 47.4505 61.7794C45.9305 60.4194 44.5605 58.8694 43.3705 57.1994L42.5905 56.1094L27.0905 32.6794C27.2105 31.7994 27.5705 30.9694 28.1305 30.2894L41.5005 49.2494C41.9505 49.8194 42.7505 49.9994 43.4005 49.6694C46.1605 48.2694 52.7505 44.7294 54.3305 41.9594L54.4105 41.8294V38.9694L57.4105 39.5094V41.4794L58.2605 41.7094C62.8305 42.9594 65.3405 43.6494 64.8805 48.0194ZM80.0605 45.3194C76.3405 45.9394 71.3505 43.7894 69.7705 43.0494L71.2905 39.7194C72.0005 40.0894 72.7205 40.0894 73.4105 40.0894C73.6805 40.0894 73.9605 40.0894 74.2305 40.1094L75.6305 40.2294C76.3605 40.2894 77.0305 40.4794 77.6205 40.7794C80.0405 42.0094 80.1305 44.3994 80.0605 45.3194ZM80.6405 46.3494C80.8105 46.2694 80.9405 46.1494 81.0305 46.0094L98.4305 75.6194L98.0005 75.8794L80.6405 46.3494ZM117.79 110.949C117.11 111.349 116.31 111.459 115.55 111.269C114.78 111.069 114.14 110.579 113.74 109.899L96.9005 81.2694C96.0805 79.8594 96.5505 78.0394 97.9505 77.2194L99.1405 76.5194L118.97 110.259L117.79 110.949ZM119.95 109.679L100.12 75.9394L102.67 74.4494L122.5 108.179L119.95 109.679ZM123.48 107.609L103.65 73.8694L106.64 72.1194L126.47 105.849L123.48 107.609ZM130.27 102.609C130.07 103.369 129.59 104.009 128.91 104.419L127.45 105.279L107.62 71.5394L109.08 70.6794C109.54 70.3994 110.06 70.2694 110.57 70.2694C111.58 70.2694 112.57 70.7894 113.12 71.7294L129.96 100.369C130.36 101.049 130.47 101.839 130.27 102.609Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="nav-footer">
                <span className="navbar-line"></span>
                <div className="footer-text">
                  <p>2023 © Saleh Zabadneh Portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
