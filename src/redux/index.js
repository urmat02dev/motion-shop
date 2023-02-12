import {createStore} from "redux";
import {MainReducer} from "./Reducer/MainReducer";

export const store =createStore(MainReducer);
