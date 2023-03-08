import {Btn} from "../../Btn/Btn";
import {StyledSetSettings} from "./SetSettingsStyled";

type SetSettingsPropsType = {
  btnSetStatus: boolean
  addLocalStorage: () => void
}

export const SetSettings:React.FC<SetSettingsPropsType> = (props) => {
  const btnSetHandler = () => props.addLocalStorage();

  return (
    <StyledSetSettings>
      <Btn active={props.btnSetStatus} onClick={btnSetHandler}>set</Btn>
    </StyledSetSettings>
  )
}