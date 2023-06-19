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
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";

export type initialStateType = {
  result: number | string,
  maxValue: number,
  minValue: number,
  btnSetStatus: boolean,
  minMaxInputStatus: 'min' | 'max' | ''
}
const App = () => {
  const initialState = useSelector<AppRootType, initialStateType>(state => state.counter);

  useEffect(() => {
    const storedMaxValue = localStorage.getItem('maxValue');
    const storedMinValue = localStorage.getItem('minValue');

    if (storedMaxValue && storedMinValue) {
      const maxValue = JSON.parse(storedMaxValue);
      const minValue = JSON.parse(storedMinValue);
      dispatch(SetMaxValueAC(maxValue));
      dispatch(SetMinValueAC(minValue));
    }
  }, []);


  const changeMinMaxInputStatus = (status: 'min' | 'max' | '') =>  dispatch(SetMinMaxInputStatusAC(status));
  const addLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(initialState.maxValue));
    localStorage.setItem('minValue', JSON.stringify(initialState.minValue));

    dispatch(SetBtnStatusAC(false))
  }
  const valStatus = (+initialState.result === initialState.maxValue) || (initialState.maxValue === initialState.minValue);

  const resetBtnStatus = +initialState.result > 0;
  useEffect(() => {
    if (initialState.maxValue <= initialState.minValue) {
      dispatch(SetResultAC('Incorrect value!'));
    }
    if (initialState.maxValue === 0 && initialState.minValue === 0) {

    }
    if (initialState.maxValue === initialState.minValue) {
      dispatch(SetResultAC('Incorrect value!'));
    } else {
      dispatch(SetResultAC(initialState.minValue));
      dispatch(SetBtnStatusAC(true))
      return;
    }
    dispatch(SetBtnStatusAC(false))
  }, [initialState.maxValue, initialState.minValue]);


  const addInc = () => dispatch(SetResultAC(+initialState.result +1));
  const resetHandler = () => dispatch(SetResultAC(initialState.minValue));
  const changeMaxValue = (max: number) => dispatch(SetMaxValueAC(max));
  const changeMinValue = (min: number) => dispatch(SetMinValueAC(min));


  const dispatch = useDispatch()
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
