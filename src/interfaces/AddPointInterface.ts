import { MouseEventHandler } from "react";
import PointInterface from "./PointInterface";

export default interface AddPointInterface {
  isNewPoint: boolean,
  addCardPoint: (point: PointInterface) => void,
  handleClick: MouseEventHandler<HTMLButtonElement>
}
