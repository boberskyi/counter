import {initialStateType} from "../App";

type SetResultACType = ReturnType<typeof SetResultAC>;
type SetMaxValueACType = ReturnType<typeof SetMaxValueAC>;
type SetMinValueACType = ReturnType<typeof SetMinValueAC>;
type SetBtnStatusACType = ReturnType<typeof SetBtnStatusAC>;
type SetMinMaxInputStatusACType = ReturnType<typeof SetMinMaxInputStatusAC>;

export type counterReducerTypes = SetResultACType | SetMaxValueACType | SetMinValueACType | SetBtnStatusACType | SetMinMaxInputStatusACType;


export const counterReducer = (state:initialStateType, action:counterReducerTypes):initialStateType => {
    switch (action.type) {
        case 'SET_RESULT':
            return { ...state, result: action.payload.result };
        case 'SET_MAX_VALUE':
            return { ...state, maxValue: action.payload.max };
        case 'SET_MIN_VALUE':
            return { ...state, minValue: action.payload.min };
        case 'SET_BTN_STATUS':
            return { ...state, btnSetStatus: action.payload.value };
        case 'SET_MIN_MAX_INPUT_STATUS':
            return { ...state, minMaxInputStatus: action.payload.status };
        default:
            return state;
    }
}

export const SetResultAC = (result:number | string) => {
    return {
        type: 'SET_RESULT',
        payload: {result}
    } as const
}

export const SetMaxValueAC = (max:number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: {max}
    } as const
}

export const SetMinValueAC = (min:number) => {
    return {
        type: 'SET_MIN_VALUE',
        payload: {min}
    } as const
}

export const SetBtnStatusAC = (value:boolean) => {
    return {
        type: 'SET_BTN_STATUS',
        payload: {value}
    } as const
}

export const SetMinMaxInputStatusAC = (status: 'min' | 'max' | '') => {
    return {
        type: 'SET_MIN_MAX_INPUT_STATUS',
        payload: {status}
    } as const
}