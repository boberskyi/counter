import { StyledBtn } from './BtnStyled';
import {FC} from "react";

type BtnPropsType = {
  children: string
  active?: boolean
  onClick?: () => void
}

export const Btn:FC<BtnPropsType> = (props) => {
  return (
    <StyledBtn active={props.active} onClick={props.onClick}> {props.children} </StyledBtn>
  )
}