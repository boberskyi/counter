import styled from "styled-components";

interface StyledMinMaxInputProps {
  error: boolean
}

export const StyledMinMaxInput = styled.input<StyledMinMaxInputProps>`
  font-size: 18px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  text-align: center;
  min-width: 200px;
  background: ${(props) => props.error ? 'rgba(255,0,0,.3)' : '#fff'};
`