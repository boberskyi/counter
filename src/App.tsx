import React, {useEffect, useState} from 'react';
import './App.css';
import styled from "styled-components";
import {CounterLeft} from "./components/CounterLeft/CounterLeft";
import {CounterRight} from "./components/CounterRight/CounterRight";

export type initialStateType = {
  result: number | string,
  maxValue: number,
  minValue: number,
  btnSetStatus: boolean,
  minMaxInputStatus: 'min' | 'max' | ''
}
const App = () => {
  const initialState:initialStateType = {
    result: "enter values and press 'set'",
    maxValue: 0,
    minValue: 0,
    btnSetStatus: false,
    minMaxInputStatus: '',
  };

  const [result, setResult] = useState<number | string>("enter values and press 'set'");
  const maxValueLC = localStorage.getItem('maxValue');
  const minValueLC = localStorage.getItem('minValue');
  const [maxValue, setMaxValue] = useState<number>(maxValueLC ? JSON.parse(maxValueLC) : 0);
  const [minValue, setMinValue] = useState<number>(minValueLC ? JSON.parse(minValueLC) : 0);
  const [btnSetStatus, setBtnSetStatus] = useState<boolean>(false);
  const [minMaxInputStatus, setMinMaxInputStatus] = useState<'min' | 'max' | ''>('');


  const changeMinMaxInputStatus = (status: 'min' | 'max' | '') => setMinMaxInputStatus(status);
  const addLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('minValue', JSON.stringify(minValue));
    setBtnSetStatus(false);
  }
  const valStatus = (+result === maxValue) || (maxValue === minValue);

  const resetBtnStatus = +result > 0;
  useEffect(() => {
    if (maxValue <= minValue) {
      setResult('Incorrect value!');
    }
    if (maxValue === 0 && minValue === 0) {
      setResult("enter values and press 'set'");
    }
    if (maxValue === minValue) {
      setResult('Incorrect value!');
    } else {
      setResult(minValue);
      setBtnSetStatus(true);
      return;
    }
    setBtnSetStatus(false);
  }, [maxValue, minValue]);


  const addInc = () => setResult(+result + 1);
  const resetHandler = () => setResult(minValue);
  const changeMaxValue = (max: number) => setMaxValue(max);
  const changeMinValue = (min: number) => setMinValue(min);

  return (
    <div className="App">
      <StyledMain>
        <CounterLeftMemo
          minValue={minValue}
          maxValue={maxValue}
          changeMaxValue={changeMaxValue}
          changeMinValue={changeMinValue}
          btnSetStatus={btnSetStatus}
          addLocalStorage={addLocalStorage}
          minMaxInputStatus={minMaxInputStatus}
          changeMinMaxInputStatus={changeMinMaxInputStatus}
        />
        <CounterRightMemo
          addInc={addInc}
          resetBtnStatus={resetBtnStatus}
          resetHandler={resetHandler}
          incStatus={valStatus}
          result={result}
          valStatus={valStatus}
        />
      </StyledMain>
    </div>
  );
}

const CounterLeftMemo = React.memo(CounterLeft);
const CounterRightMemo = React.memo(CounterRight);

export const StyledMain = styled.main`
  background-color: #292c35;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export default App;
