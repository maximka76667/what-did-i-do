export default interface HeaderInterface {
  isLoggedIn: boolean,
  onSignout: () => void,
  changeLoginPopupVisibility: () => void,
  closeLoginPopup: () => void
}
