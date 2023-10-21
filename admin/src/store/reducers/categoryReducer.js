import { CATEGORIES_FETCH_SUCCESS, CATEGORYDETAIL_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    categories: [],
    category: null
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case CATEGORYDETAIL_FETCH_SUCCESS:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer