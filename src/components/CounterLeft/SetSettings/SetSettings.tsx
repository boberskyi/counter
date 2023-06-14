import {Btn} from "../../Btn/Btn";
import {StyledSetSettings} from "./SetSettingsStyled";
import React, {FC} from "react";
import {SetSettingsPropsType} from "./SetSettingsTypes";

export const SetSettings:FC<SetSettingsPropsType> = (props) => {
  console.log('SetSettings render');

  const btnSetHandler = () => props.addLocalStorage();

  return (
    <StyledSetSettings>
      <BtnMemo active={props.btnSetStatus} onClick={btnSetHandler}>set</BtnMemo>
    </StyledSetSettings>
  )
}

const BtnMemo = React.memo(Btn);