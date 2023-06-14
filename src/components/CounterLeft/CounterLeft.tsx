import {MinMax} from "./MinMax/MinMax";
import {SetSettings} from "./SetSettings/SetSettings";
import {StyledCounterLeft} from "./CounterLeftStyled";
import {CounterLeftPropsType} from "./CounterLeftTypes";
import React from "react";


export const CounterLeft:React.FC<CounterLeftPropsType> = (props) => {
  return (
    <StyledCounterLeft>
      <MinMaxMemo
        maxValue={props.maxValue}
        minValue={props.minValue}
        changeMaxValue={props.changeMaxValue}
        changeMinValue={props.changeMinValue}
        minMaxInputStatus={props.minMaxInputStatus}
        changeMinMaxInputStatus={props.changeMinMaxInputStatus}
      />
      <SetSettingsMemo
        btnSetStatus={props.btnSetStatus}
        addLocalStorage={props.addLocalStorage}
      />
    </StyledCounterLeft>
  )
}

const MinMaxMemo = React.memo(MinMax);
const SetSettingsMemo = React.memo(SetSettings);
