import PointInterface from "./PointInterface";

export default interface PointComponentInterface {
  point: PointInterface,
  // to do fix
  onUpdatePoint: (pointId: string, newName: string) => void,
  onDeletePoint: (pointId: string) => void
}
