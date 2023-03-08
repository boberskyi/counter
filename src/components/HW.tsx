import {useEffect, useState} from "react";
import {StyledMain} from "./HWStyled";
import {CounterLeft} from "./CounterLeft/CounterLeft";
import {CounterRight} from "./CounterRight/CounterRight";

export const HW = () => {
  const [result, setResult] = useState<number | string>("enter values and press 'set'");
  const [maxValue, setMaxValue] = useState<number>(localStorage.getItem('maxValue') ? JSON.parse(localStorage.getItem('maxValue') as string) : 0);
  const [minValue, setMinValue] = useState<number>(localStorage.getItem('minValue') ? JSON.parse(localStorage.getItem('minValue') as string) : 0);
  const [btnSetStatus, setBtnSetStatus] = useState<boolean>(false);

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