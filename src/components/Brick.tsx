import { Block } from "../types";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
type Props = { block: Block; align: boolean; index: number; length: number };
export default function Brick({ block, align, index, length }: Props) {
  return (
    <section
      id={"brick" + index?.toString()}
      className="flex flex-col items-center justify-center"
    >
      <div
        className={`flex flex-col md:h-[70vh] ${
          align ? " flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        } `}
      >
        <span className="whitespace-pre-line p-10 md:w-1/2 text-[2vh] md:text-[1.4vw] text-left first-letter:[font-size:3em] first-letter:float-left first-letter:leading-[88%] first-letter:mr-[0.1em] first-letter:[text-shadow:_-0.1em_-0.1em_0.1em_rgb(128_128_128_/_1)]">
          {block.text}
        </span>
        <div className="md:w-1/2 m-10 flex justify-center items-center overflow-clip">
          <img
            src={require(`../img/${block.img}`)}
            alt={block.img}
            className=""
          />
        </div>
      </div>
      {length > index + 1 ? (
        <a href={`#brick${index + 1}`} className="text-3xl animate-pulse p-10">
          <BsArrowDownCircle />
        </a>
      ) : (
        <a href="#navbar" className="text-3xl animate-pulse p-10">
          <BsArrowUpCircle />
        </a>
      )}
    </section>
  );
}
