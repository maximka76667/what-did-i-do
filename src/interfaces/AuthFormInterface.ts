import UserInterface from "./UserInterface";

export default interface AuthFormInterface {
  onFormSubmit: (userData: UserInterface) => void,
  heading: string,
  children: JSX.Element | JSX.Element[]
}
