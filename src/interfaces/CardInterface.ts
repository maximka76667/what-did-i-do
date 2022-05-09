import PointInterface from "./PointInterface";

interface CardInterface {
  _id: string,
  date: string,
  points: PointInterface[],
  owner?: string
}

export default CardInterface;
