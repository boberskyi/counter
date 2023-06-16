import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import styled from "styled-components";
import {CounterLeft} from "./components/CounterLeft/CounterLeft";
import {CounterRight} from "./components/CounterRight/CounterRight";
import {
  counterReducer,
  SetBtnStatusAC,
  SetMaxValueAC,
  SetMinMaxInputStatusAC, SetMinValueAC,
  SetResultAC
} from "./state/counter-reducer";

export type initialStateType = {
  result: number | string,
  maxValue: number,
  minValue: number,
  btnSetStatus: boolean,
  minMaxInputStatus: 'min' | 'max' | ''
}
const App = () => {
  const [initialState, dispatchInitialState] = useReducer(counterReducer,{
    result: "enter values and press 'set'",
    maxValue: 0,
    minValue: 0,
    btnSetStatus: false,
    minMaxInputStatus: '',
  });

  useEffect(() => {
    const storedMaxValue = localStorage.getItem('maxValue');
    const storedMinValue = localStorage.getItem('minValue');

    if (storedMaxValue && storedMinValue) {
      const maxValue = JSON.parse(storedMaxValue);
      const minValue = JSON.parse(storedMinValue);
      dispatchInitialState(SetMaxValueAC(maxValue));
      dispatchInitialState(SetMinValueAC(minValue));
    }
  }, []);


  const changeMinMaxInputStatus = (status: 'min' | 'max' | '') =>  dispatchInitialState(SetMinMaxInputStatusAC(status));
  const addLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(initialState.maxValue));
    localStorage.setItem('minValue', JSON.stringify(initialState.minValue));

    dispatchInitialState(SetBtnStatusAC(false))
  }
  const valStatus = (+initialState.result === initialState.maxValue) || (initialState.maxValue === initialState.minValue);

  const resetBtnStatus = +initialState.result > 0;
  useEffect(() => {
    if (initialState.maxValue <= initialState.minValue) {
      dispatchInitialState(SetResultAC('Incorrect value!'));
    }
    if (initialState.maxValue === 0 && initialState.minValue === 0) {

    }
    if (initialState.maxValue === initialState.minValue) {
      dispatchInitialState(SetResultAC('Incorrect value!'));
    } else {
      dispatchInitialState(SetResultAC(initialState.minValue));
      dispatchInitialState(SetBtnStatusAC(true))
      return;
    }
    dispatchInitialState(SetBtnStatusAC(false))
  }, [initialState.maxValue, initialState.minValue]);


  const addInc = () => dispatchInitialState(SetResultAC(+initialState.result +1));
  const resetHandler = () => dispatchInitialState(SetResultAC(initialState.minValue));
  const changeMaxValue = (max: number) => dispatchInitialState(SetMaxValueAC(max));
  const changeMinValue = (min: number) => dispatchInitialState(SetMinValueAC(min));

  return (
    <div className="App">
      <StyledMain>
        <CounterLeftMemo
          minValue={initialState.minValue}
          maxValue={initialState.maxValue}
          changeMaxValue={changeMaxValue}
          changeMinValue={changeMinValue}
          btnSetStatus={initialState.btnSetStatus}
          addLocalStorage={addLocalStorage}
          minMaxInputStatus={initialState.minMaxInputStatus}
          changeMinMaxInputStatus={changeMinMaxInputStatus}
        />
        <CounterRightMemo
          addInc={addInc}
          resetBtnStatus={resetBtnStatus}
          resetHandler={resetHandler}
          incStatus={valStatus}
          result={initialState.result}
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
