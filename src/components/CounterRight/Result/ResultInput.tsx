import {FC} from "react";
import {StyledResult} from "./ResultInputStyled";
import {ResultInputPropsType} from "./ResultInputTypes";

export const ResultInput:FC<ResultInputPropsType> = (props) => {

  return (
    <StyledResult redTxt={props.valStatus}>{props.result}</StyledResult>
  )
}