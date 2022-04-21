import PointInterface from "./PointInterface";

interface CardInterface {
  _id: string,
  date: string,
  points: PointInterface[],
}

export default CardInterface;
