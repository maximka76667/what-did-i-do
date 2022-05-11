import { MouseEventHandler } from "react";
import PointInterface from "./PointInterface";

export default interface AddPointInterface {
  isNewPoint: boolean,
  addCardPoint: (point: Omit<PointInterface, "_id">) => void,
  handleClick: MouseEventHandler<HTMLButtonElement>
}
