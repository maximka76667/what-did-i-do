import UserFunction from "./UserFunction";

export default interface LoginPopupInterface {
  isOpened: boolean,
  onLogin: UserFunction,
  isLoggedIn: boolean,
  closeLoginPopup: () => void
}
