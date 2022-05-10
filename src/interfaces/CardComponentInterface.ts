import CardInterface from "./CardInterface";

export default interface CardComponentInterface {
  card: CardInterface,
  todayCard?: true
  onLoginButtonClick?: () => void
}
