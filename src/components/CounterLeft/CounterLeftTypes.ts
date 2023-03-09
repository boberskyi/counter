export type CounterLeftPropsType = {
  maxValue: number
  minValue: number
  changeMaxValue: (max:number) => void
  changeMinValue: (min:number) => void
  btnSetStatus: boolean
  addLocalStorage: () => void
  minMaxInputStatus: 'min' | 'max' | ''
  changeMinMaxInputStatus: (status: 'min' | 'max' | '') => void
}