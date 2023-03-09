import styled from "styled-components";

export const StyledMinMax = styled.div`
  border: 3px solid #63dbfd;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const StyledMinMaxLabel = styled.label`
  display: flex;
  align-items:center;
  justify-content: space-between;
`
export const StyledMinMaxLabelHeading = styled.span`
  font-size: 23px;
  color: #63dbfd;
  font-weight: bold;
`
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