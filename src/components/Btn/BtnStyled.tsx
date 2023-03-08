import styled from "styled-components";

interface StyledBtnProps {
  active?: boolean
}
export const StyledBtn = styled.button`
  opacity: ${(props: StyledBtnProps) => props.active ? '1' : '0.5'};
  pointer-events: ${(props: StyledBtnProps) => props.active ? 'auto' : 'none'};
  font-size: 25px;
  background-color: #63dbfd;
  border-radius: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
`