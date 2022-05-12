import UserInterface from "./UserInterface";

export default interface RegisterInterface {
  onRegister: (userData: UserInterface) => void
}
