import {StyledMinMax, StyledMinMaxLabel, StyledMinMaxLabelHeading} from "./MinMaxStyled";
import {StyledMinMaxInput} from "./MinMaxInput/MinMaxInputStyled";
import {FC} from "react";
import {MinMaxPropsType} from "./MinMaxTypes";

export const MinMax:FC<MinMaxPropsType> = (props) => {
  const onChangeMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    props.changeMinValue(value);
    props.changeMinMaxInputStatus('min');
  }
  const onChangeMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    props.changeMaxValue(value);
    props.changeMinMaxInputStatus('max');
  }

  let errorInputMax:boolean = false;
  let errorInputMin:boolean = false;

  const checkError = props.minValue >= props.maxValue || props.maxValue === props.minValue;

  const errorInput = (status: 'min' | 'max' | '') => (status === 'min') ? errorInputMin = checkError : (status === 'max') ? errorInputMax = checkError : ''

  errorInput(props.minMaxInputStatus);

  return (
    <StyledMinMax>
      <StyledMinMaxLabel>
        <StyledMinMaxLabelHeading>max value</StyledMinMaxLabelHeading>
        <StyledMinMaxInput
          onChange={onChangeMaxHandler}
          type="number"
          placeholder={'0'}
          min={props.minValue}
          value={props.maxValue}
          error={errorInputMax}
        />
      </StyledMinMaxLabel>
      <StyledMinMaxLabel>
        <StyledMinMaxLabelHeading>min value</StyledMinMaxLabelHeading>
        <StyledMinMaxInput
          onChange={onChangeMinHandler}
          type="number"
          placeholder={'0'}
          min={0}
          max={props.maxValue}
          value={props.minValue}
          error={errorInputMin}
        />
      </StyledMinMaxLabel>
    </StyledMinMax>
  )
}