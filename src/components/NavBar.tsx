import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-[10vh] uppercase bg-inherit">
      <ul className="flex justify-around text-white items-center">
        <Link to={"/"}>
          <li className="flex-auto w-64">
            <div className="text-4xl my-5">
              <span className=" overline decoration-white ">Vit</span>
              <span className="bg-white text-black">Byro</span>
            </div>
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="flex-auto w-64">About</li>
        </Link>
        <Link to={"/projects"}>
          <li className="flex-auto w-64">Projects</li>
        </Link>
        <Link to={"/cv"}>
          <li className="flex-auto w-64">CV</li>
        </Link>
        <Link to={"/contact"}>
          <li className="flex-auto w-64">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
