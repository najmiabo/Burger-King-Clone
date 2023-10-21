import { CATEGORY_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    categories: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer