import Axios from "axios"

const Redux = require("redux")

const productData = {
    products: []
}
export const fetchProducts = () => {
    return (dispatch) => {
        Axios.get("https://fakestoreapi.com/products").then((output) => {
            const productsData = output.data
            dispatch({type: "FETCH_PRODUCTS", payload: productsData})
        })
    }
}

const productReducer = (state = productData, action) => {
    if (action.type === "FETCH_PRODUCTS") {
        return {
            products: action.payload
        }
    }else{
        return state
    }
}

export const rootReducer = Redux.combineReducers({
    product: productReducer
})