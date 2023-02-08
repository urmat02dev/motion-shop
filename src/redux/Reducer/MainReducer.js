import {GET_BASKET} from "../ActionTypes";

const initialState ={
    products:[],
    basket:[],
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_BASKET :
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        default :
            return state
    }
}
