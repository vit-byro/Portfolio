import { Block } from "../types";
import Brick from "../components/Brick";

export default function About() {
  const blocks: Block[] = [
    { text: "something", img: "secretary.jpg" },
    { text: "another thing", img: "stack.jpg" },
  ];
  let align: boolean = true;
  return (
    <div className="text-white">
      {blocks.map(function (block: Block, index) {
        align = !align;
        return <Brick block={block} align={align} key={index} />;
      })}
    </div>
  );
}
