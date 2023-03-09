export type MinMaxPropsType = {
  maxValue: number
  minValue: number
  changeMaxValue: (max:number) => void
  changeMinValue: (min:number) => void
  minMaxInputStatus: 'min' | 'max' | ''
  changeMinMaxInputStatus: (status: 'min' | 'max' | '') => void
}