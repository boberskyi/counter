import {MinMax} from "./MinMax/MinMax";
import {SetSettings} from "./SetSettings/SetSettings";
import {StyledCounterLeft} from "./CounterLeftStyled";

type CounterLeftPropsType = {
  maxValue: number
  minValue: number
  changeMaxValue: (max:number) => void
  changeMinValue: (min:number) => void
  btnSetStatus: boolean
  addLocalStorage: () => void
  minMaxInputStatus: 'min' | 'max' | ''
  changeMinMaxInputStatus: (status: 'min' | 'max' | '') => void
}

export const CounterLeft:React.FC<CounterLeftPropsType> = (props) => {
  return (
    <StyledCounterLeft>
      <MinMax
        maxValue={props.maxValue}
        minValue={props.minValue}
        changeMaxValue={props.changeMaxValue}
        changeMinValue={props.changeMinValue}
        minMaxInputStatus={props.minMaxInputStatus}
        changeMinMaxInputStatus={props.changeMinMaxInputStatus}
      />
      <SetSettings
        btnSetStatus={props.btnSetStatus}
        addLocalStorage={props.addLocalStorage}
      />
    </StyledCounterLeft>
  )
}