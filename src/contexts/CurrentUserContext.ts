import { createContext } from "react"

const CurrentUserContext = createContext({ email: "", name: "" });

export default CurrentUserContext;
