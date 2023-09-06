import { Block } from "../types";
import Brick from "../components/Brick";

export default function About() {
  const blocks: Block[] = [
    {
      text: `I picked up a new hobby... You cannot have enough, can you? I decided to take on watchmaking, because patience and fixing things are my strong suits. It is enjoyable even though I have not worn a wristwatch since I carry a mobile phone around. I decided to create a dedicated workplace for it, because cleanliness and tidiness is key and wanted to be able to have it contained. That was my thought process behind acquiring a bureau or chiffonier for this purpose. Since then it has evolved into my office desk. So this is where the name originates, I find it neat, because the Swedish 'byrå' word resembles the German word for office, 'büro'. Plus, it is white ('vit' in Swedish), so I don't lose those tiny watch parts.`,
      img: "secretary.jpg",
    },
    { text: "So what do I do? - you might ask. Well ", img: "computer.jpg" },
    { text: "Pingpong", img: "stack.jpg" },
  ];
  let align: boolean = true;
  return (
    <div className="text-white">
      {blocks.map(function (block: Block, index) {
        align = !align;
        return (
          <Brick
            block={block}
            align={align}
            index={index}
            length={blocks.length}
          />
        );
      })}
    </div>
  );
}
