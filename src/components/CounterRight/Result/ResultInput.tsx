import {FC} from "react";
import {StyledResult} from "./ResultInputStyled";
import {ResultInputPropsType} from "./ResultInputTypes";

export const ResultInput:FC<ResultInputPropsType> = (props) => {
  console.log('Result input render');

  return (
    <StyledResult redTxt={props.valStatus}>{props.result}</StyledResult>
  )
}