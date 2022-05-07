import CardInterface from "./CardInterface";
import UserFunction from "./UserFunction";

export default interface HomeInterface {
  cards: CardInterface[], isLoggedIn: boolean, onSignout: () => void, onLogin: UserFunction
}
