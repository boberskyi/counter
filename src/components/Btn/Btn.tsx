import { StyledBtn } from './BtnStyled';
import {FC} from "react";
import {BtnPropsType} from "./BtnTypes";

export const Btn:FC<BtnPropsType> = (props) => {
  console.log('Btn render');

  return (
    <StyledBtn active={props.active} onClick={props.onClick}> {props.children} </StyledBtn>
  )
}