import {Fieldset} from "./Fieldset/Fieldset";
import React from "react";
import { StyledCounterRight } from "./CounterRightStyled";
import {CounterRightPropsType} from "./CounterRightTypes";
import {StyledResult} from "./Result/ResultInputStyled";

export const CounterRight:React.FC<CounterRightPropsType> = (props) => {
  console.log('Counter right render');
  return (
    <StyledCounterRight>
      <StyledResult redTxt={props.valStatus}>{props.result}</StyledResult>
      <FieldsetMemo addInc={props.addInc}
                resetBtnStatus={props.resetBtnStatus}
                resetHandler={props.resetHandler}
                incStatus={props.valStatus}
      />
    </StyledCounterRight>
  )
}

const FieldsetMemo = React.memo(Fieldset);