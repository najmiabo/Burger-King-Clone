import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import itemReducer from './itemReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    itemReducer,
    categoryReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store