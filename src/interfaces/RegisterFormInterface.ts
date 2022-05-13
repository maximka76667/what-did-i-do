import UserInterface from "./UserInterface";

export default interface RegisterFormInterface {
  onRegister: (userData: UserInterface) => void
}
