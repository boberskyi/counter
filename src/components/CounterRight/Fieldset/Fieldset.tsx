import {FC} from "react";
import {StyledFieldset} from "./FieldsetStyled";
import {Btn} from "../../Btn/Btn";
import {FieldsetPropsType} from "./FieldSetTypes";


export const Fieldset:FC<FieldsetPropsType> = (props) => {

  const incHandler = () =>  props.addInc();

  const resetHandler = () => props.resetHandler();

  return (
    <StyledFieldset>
      <Btn active={!props.incStatus} onClick={incHandler}> inc </Btn>
      <Btn active={props.resetBtnStatus} onClick={resetHandler}> reset </Btn>
    </StyledFieldset>
  )
}