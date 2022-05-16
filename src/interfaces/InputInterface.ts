export default interface InputInterface {
  label: string,
  type: string,
  validation?: {
    pattern?: {
      value: RegExp,
      message: string
    }
  }
}
