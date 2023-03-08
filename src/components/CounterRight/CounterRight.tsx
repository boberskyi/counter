import {ResultInput} from "./Result/ResultInput";
import {Fieldset} from "./Fieldset/Fieldset";
import React from "react";
import { StyledCounterRight } from "./CounterRightStyled";
import {CounterRightPropsType} from "./CounterRightTypes";


export const CounterRight:React.FC<CounterRightPropsType> = (props) => {
  return (
    <StyledCounterRight>
      <ResultInput result={props.result}
                   valStatus={props.valStatus}
      />
      <Fieldset addInc={props.addInc}
                resetBtnStatus={props.resetBtnStatus}
                resetHandler={props.resetHandler}
                incStatus={props.valStatus}
      />
    </StyledCounterRight>
  )
}