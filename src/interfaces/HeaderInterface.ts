export default interface HeaderInterface {
  isLoggedIn: boolean,
  onSignout: () => void,
  onLoginButtonClick: () => void
}
