import React, {FC} from "react";
import {StyledFieldset} from "./FieldsetStyled";
import {Btn} from "../../Btn/Btn";
import {FieldsetPropsType} from "./FieldSetTypes";


export const Fieldset:FC<FieldsetPropsType> = (props) => {
  console.log('Fieldset render');

  const incHandler = () =>  props.addInc();
  const resetHandler = () => props.resetHandler();

  return (
    <StyledFieldset>
      <BtnMemo active={!props.incStatus} onClick={incHandler}> inc </BtnMemo>
      <BtnMemo active={props.resetBtnStatus} onClick={resetHandler}> reset </BtnMemo>
    </StyledFieldset>
  )
}

const BtnMemo = React.memo(Btn);