import { ITEMDETAIL_FETCH_SUCCESS, ITEMS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    items: [],
    item: null
}

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case ITEMDETAIL_FETCH_SUCCESS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

export default itemReducer