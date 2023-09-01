import { Block } from "../types";
type Props = { block: Block; align: boolean };
export default function Brick({ block, align }: Props) {
  return (
    <div className={"flex" + (align ? " flex-row-reverse" : "")}>
      <p className=" w-1/2 m-10">{block.text}</p>
      <img
        src={require(`../img/${block.img}`)}
        alt="byro"
        className="w-1/2 m-10"
      />
    </div>
  );
}
