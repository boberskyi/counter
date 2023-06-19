import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export type AppRootType = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({counter: counterReducer});

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;