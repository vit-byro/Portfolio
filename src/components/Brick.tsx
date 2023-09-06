import { Block } from "../types";
import { BsArrowDownCircle } from "react-icons/bs";
type Props = { block: Block; align: boolean; index: number; length: number };
export default function Brick({ block, align, index, length }: Props) {
  const scroll = () => {
    const section = document.querySelector(`#brick${index + 1}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id={"brick" + index?.toString()} className="text-center">
      <div className={`flex h-[70vh] ${align ? " flex-row-reverse" : ""} `}>
        <p className="p-10 w-1/2 text-[1.5vw] text-left first-letter:[font-size:4rem] initial">
          {block.text}
        </p>
        <div className="w-1/2 m-10 flex justify-center items-center overflow-clip">
          <img
            src={require(`../img/${block.img}`)}
            alt={block.img}
            className=""
          />
        </div>
      </div>
      {length > index + 1 ? (
        <button onClick={scroll} className="text-3xl animate-pulse p-10">
          <BsArrowDownCircle />
        </button>
      ) : (
        <p></p>
      )}
    </section>
  );
}
