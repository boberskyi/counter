import {Btn} from "../../Btn/Btn";
import {StyledSetSettings} from "./SetSettingsStyled";
import {FC} from "react";
import {SetSettingsPropsType} from "./SetSettingsTypes";

export const SetSettings:FC<SetSettingsPropsType> = (props) => {
  const btnSetHandler = () => props.addLocalStorage();

  return (
    <StyledSetSettings>
      <Btn active={props.btnSetStatus} onClick={btnSetHandler}>set</Btn>
    </StyledSetSettings>
  )
}