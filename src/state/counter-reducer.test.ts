import {initialStateType} from "../App";
import {
    counterReducer,
    SetBtnStatusAC,
    SetMaxValueAC,
    SetMinMaxInputStatusAC,
    SetMinValueAC,
    SetResultAC
} from "./counter-reducer";

test('Set result', () => {
    const initialState:initialStateType = {
        result: "enter values and press 'set'",
        maxValue: 0,
        minValue: 0,
        btnSetStatus: false,
        minMaxInputStatus: '',
    };

    const action = SetResultAC(2);
    const endState = counterReducer(initialState, action);

    expect(endState.result).toBe(2);
})

test('Set max value', () => {
    const initialState:initialStateType = {
        result: "enter values and press 'set'",
        maxValue: 0,
        minValue: 0,
        btnSetStatus: false,
        minMaxInputStatus: '',
    };

    const action = SetMaxValueAC(2);
    const endState = counterReducer(initialState, action);

    expect(endState.maxValue).toBe(2);
})

test('Set min value', () => {
    const initialState:initialStateType = {
        result: "enter values and press 'set'",
        maxValue: 0,
        minValue: 0,
        btnSetStatus: false,
        minMaxInputStatus: '',
    };

    const action = SetMinValueAC(4);
    const endState = counterReducer(initialState, action);

    expect(endState.minValue).toBe(4);
})

test('Set btn status', () => {
    const initialState:initialStateType = {
        result: "enter values and press 'set'",
        maxValue: 0,
        minValue: 0,
        btnSetStatus: false,
        minMaxInputStatus: '',
    };

    const action = SetBtnStatusAC(true);
    const endState = counterReducer(initialState, action);

    expect(endState.btnSetStatus).toBe(true);
})

test('Set min max input status', () => {
    const initialState:initialStateType = {
        result: "enter values and press 'set'",
        maxValue: 0,
        minValue: 0,
        btnSetStatus: false,
        minMaxInputStatus: '',
    };

    const action = SetMinMaxInputStatusAC('max');
    const endState = counterReducer(initialState, action);

    expect(endState.minMaxInputStatus).toBe('max');
})