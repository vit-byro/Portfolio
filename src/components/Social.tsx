import "./Social.css";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

export default function Social() {
  function penving(dataToUnpenving: string): string {
    return dataToUnpenving
      .replace(/penving/g, "")
      .replace(/kukac/g, "@")
      .replace(/pont/g, ".");
  }
  function onClickHandler() {
    navigator.clipboard.writeText(
      penving(
        "vpenvingipenvingtbypenvingropenvingkukacpenvinggpenvingmapenvingipenvinglpontcpenvingopenvingm"
      )
    );
  }
  return (
    <div className="container">
      <div id="linkedin" className="social">
        <a
          href="https://www.linkedin.com/in/csaba-ferenc-guti-202b19152/"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoLinkedinSquare />
        </a>
      </div>
      <div id="github" className="social">
        <a href="https://github.com/vit-byro" target="_blank" rel="noreferrer">
          <BiLogoGithub />
        </a>
      </div>
      <div
        onClick={onClickHandler}
        className="social cursor-pointer"
        id="gmail"
      >
        <BiLogoGmail />
      </div>
    </div>
  );
}
