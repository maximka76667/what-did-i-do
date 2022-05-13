import { createContext } from "react"
import { UserInterface } from "../interfaces";

const CurrentUserContext = createContext<Omit<UserInterface, "password">>({ email: "", name: "" });

export default CurrentUserContext;
