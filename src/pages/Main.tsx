import { Link } from "react-router-dom";
import Social from "../components/Social";

export default function Main() {
  return (
    <div>
      <div className="bg-[url('img/waterfall.jpg')] overflow-hidden bg-cover h-[90vh] animate-fade-right animate-once animate-duration-[2000ms] animate-ease-out">
        <div className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-out">
          <div className=" bg-black text-white ml-10 mt-4 p-3 w-1/2  opacity-75 hover:opacity-100 text-xl">
            <p>What is Vit Byrå or who is Vit Byrå?</p>
            <p>
              Branding is an odd thing, which I wanted to grasp somewhat
              personally. I am a full-stack developer and I associate myself in
              the online world as Vit Byrå. But what would that be?{" "}
              <p>
                Find out more in the <Link to={"/about"}> About </Link> section.
              </p>
            </p>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
}
