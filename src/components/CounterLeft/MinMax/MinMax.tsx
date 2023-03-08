import {StyledMinMax, StyledMinMaxLabel, StyledMinMaxLabelHeading} from "./MinMaxStyled";
import {StyledMinMaxInput} from "./MinMaxInput/MinMaxInputStyled";

type MinMaxPropsType = {
  maxValue: number
  minValue: number
  changeMaxValue: (max:number) => void
  changeMinValue: (min:number) => void
}

export const MinMax:React.FC<MinMaxPropsType> = (props) => {
  const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    props.changeMinValue(value);
  }
  const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    props.changeMaxValue(value);
  }
  return (
    <StyledMinMax>
        <StyledMinMaxLabel>
          <StyledMinMaxLabelHeading>max value</StyledMinMaxLabelHeading>
          <StyledMinMaxInput onChange={onChangeMaxHandler} type="number" placeholder={'0'} min={props.minValue} value={props.maxValue}/>
        </StyledMinMaxLabel>
        <StyledMinMaxLabel>
          <StyledMinMaxLabelHeading>min value</StyledMinMaxLabelHeading>
          <StyledMinMaxInput onChange={onChangeMinHandler} type="number" placeholder={'0'} min={0} max={props.maxValue} value={props.minValue}/>
        </StyledMinMaxLabel>
    </StyledMinMax>
  )
}