import "./Social.css";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

export default function Social() {
  return (
    <div className="container">
      <div id="linkedin" className="social">
        <BiLogoLinkedinSquare />
      </div>
      <div id="github" className="social">
        <BiLogoGithub />
      </div>
      <div id="gmail" className="social">
        <BiLogoGmail />
      </div>
    </div>
  );
}
