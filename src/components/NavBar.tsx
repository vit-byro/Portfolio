import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  console.log(window.scrollY);
  return (
    <div
      className={`h-[10vh] uppercase bg-inherit sticky ${show ? "top-0" : ""}`}
    >
      <ul className="flex justify-between mx-5 text-white items-center">
        <Link to={"/"}>
          <li className="flex-auto">
            <div className="text-4xl my-5">
              <span className=" overline decoration-white ">Vit</span>
              <span className="bg-white text-black">Byro</span>
            </div>
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="flex-auto">About</li>
        </Link>
        <Link to={"/projects"}>
          <li className="flex-auto">Projects</li>
        </Link>
        <Link to={"/cv"}>
          <li className="flex-auto">CV</li>
        </Link>
        <Link to={"/contact"}>
          <li className="flex-auto">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
