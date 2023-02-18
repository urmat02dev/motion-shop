import {DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_BASKET, GET_PRODUCT, INCREASE_QUANTITY} from "../ActionTypes";
import products from "../../components/main-page/products/Products";


const initialState ={
    products:[],
    basket:[],

}

console.log(initialState.products)
export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, products: action.payload}
        case GET_BASKET :
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return{...state, basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity + 1} : el)}
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        case DELETE_FROM_BASKET : {
            return{
            ...state, basket: state.basket.filter(el => {
                return el.id !== action.payload
            })
            }
        }

        case INCREASE_QUANTITY :
            const foundPro = state.basket.find(el => el.id === action.payload.id)
            return{...state, basket: state.basket.map(el => el.id === foundPro.id ? {...el, quantity: el.quantity + 1} : el)}
        case DECREASE_QUANTITY :
        return{...state, basket: state.basket.map(el => {
            if (el.id === action.payload) {
                if (el.quantity > 1) {
                    return {...el, quantity: el.quantity - 1}
                } else return el
            } else return el
        })
        }

        default :
            return state
    }
}
