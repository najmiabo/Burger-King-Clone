import { CATEGORY_FETCH_SUCCESS, ITEMDETAIL_FETCH_SUCCESS, ITEMS_FETCH_SUCCESS } from "./actionTypes"

const baseUrl = 'https://bk.abobelajardihacktiv.xyz'

export function fetchItems() {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/pub/items')
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            dispatch({
                type: ITEMS_FETCH_SUCCESS,
                payload: resData
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function fetchItemDetail(id, navigate) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/pub/items/' + id)
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            dispatch({
                type: ITEMDETAIL_FETCH_SUCCESS,
                payload: resData
            })
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }
}

export function fetchCategory() {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/pub/categories')
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            dispatch({
                type: CATEGORY_FETCH_SUCCESS,
                payload: resData
            })
        } catch (err) {
            console.log(err)
        }
    }
}