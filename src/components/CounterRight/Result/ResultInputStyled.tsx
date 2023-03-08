import styled from "styled-components";

interface StyledResultProps {
  redTxt: boolean
}

export const StyledResult = styled.div`
  color: ${(props: StyledResultProps) => props.redTxt ? '#ff1140' : '#000'};
  cursor: default;
  width: 100%;
  background-color:#63dbfd;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 50px;
  box-sizing: border-box;
  padding: 40px;
  pointer-events: none;
  user-select: none;
  font-weight: bold;
`