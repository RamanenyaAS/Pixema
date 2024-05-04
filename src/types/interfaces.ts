export interface IButton{
  text: string,
  type: string,
  isDisabled: boolean
}

export interface IInput{
  type: string,
  placeholder: string,
  autocomplete?: string,
  onChange?: (event: any) => void, 
  isDisabled: boolean
}