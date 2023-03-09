import {useEffect, useState} from "react";
import {StyledMain} from "./HWStyled";
import {CounterLeft} from "./CounterLeft/CounterLeft";
import {CounterRight} from "./CounterRight/CounterRight";

export const HW = () => {
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
  useEffect(()=> {
    if(maxValue <= minValue) {
      setResult('Incorrect value!');
      setBtnSetStatus(false);
    }
    if(maxValue === 0 && minValue === 0) {
      setResult("enter values and press 'set'");
      setBtnSetStatus(false);
    }
    if(maxValue === minValue) {
      setResult('Incorrect value!');
      setBtnSetStatus(false);
    }
    else {
      setResult(minValue);
      setBtnSetStatus(true);
    }
  }, [maxValue, minValue]);


  const addInc = () => setResult(+result + 1);

  const resetHandler = () => setResult(minValue);

  const changeMaxValue = (max:number) => setMaxValue(max);

  const changeMinValue = (min:number) => setMinValue(min);

  return (
    <StyledMain>
      <CounterLeft
        minValue={minValue}
        maxValue={maxValue}
        changeMaxValue={changeMaxValue}
        changeMinValue={changeMinValue}
        btnSetStatus={btnSetStatus}
        addLocalStorage={addLocalStorage}
        minMaxInputStatus={minMaxInputStatus}
        changeMinMaxInputStatus={changeMinMaxInputStatus}
      />
      <CounterRight addInc={addInc}
                    resetBtnStatus={resetBtnStatus}
                    resetHandler={resetHandler}
                    incStatus={valStatus}
                    result={result}
                    valStatus={valStatus}
      />
    </StyledMain>
  )
}