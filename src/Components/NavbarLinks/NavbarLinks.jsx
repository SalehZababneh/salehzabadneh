import "./navbarLink.css";
const NavigationLinks = ({ links, activeLink, onLinkClick }) => {
  return (
    <ul className=" flex justify-center items-center gap-12  ">
      {links.map((link) => (
        <li key={link} className={` ${link === activeLink ? "active " : ""}`}>
          <p onClick={() => onLinkClick(link)}>{link}</p>
        </li>
      ))}
    </ul>
  );
};
export default NavigationLinks;
