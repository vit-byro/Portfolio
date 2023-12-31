import { Block } from "../types";
import Brick from "../components/Brick";

export default function Projects() {
  const blocks: Block[] = [
    {
      text: `Portfolio

      I created it in React with Typescript, formatting is mainly executed with Tailwind, but one can't avoid CSS. Check out the Git repository if you are interested, I made it public!`,
      img: "projects.jpg",
    },
    {
      text: `Currency
      
This one is a collaboration project. An API is under creation for exchange rates and historical data sets of currencies based on the daily rates stated by Sweden's central bank. Lot of such APIs are available, but none of them are reliable and mainly free enough for our future plans.`,
      img: "money.jpg",
    },
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
