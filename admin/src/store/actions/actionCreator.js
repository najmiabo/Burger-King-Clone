import { ITEMS_FETCH_SUCCESS, CATEGORIES_FETCH_SUCCESS, ITEMDETAIL_FETCH_SUCCESS, CATEGORYDETAIL_FETCH_SUCCESS } from "./actionTypes"
import Swal from 'sweetalert2'

const baseUrl = 'https://bk.abobelajardihacktiv.xyz'
const access_token = localStorage.access_token

export function swal(position, icon, title) {
    Swal.fire({
        position,
        icon,
        title,
        showConfirmButton: false,
        timer: 1500
    })
}

export function handleLogin({ email, password }, navigate) {
    // console.log(email, password)
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            const result = await response.json()
            // console.log(result)
            if (!response.ok) {
                throw await result
            }
            localStorage.setItem("access_token", result.access_token)
            localStorage.setItem("username", result.username)
            navigate('/')
            swal("top-end", "success", "Login Success")
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function fetchItems() {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/items', {
                headers: {
                    access_token: localStorage.access_token
                }
            })
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
            swal("center", "error", err.message)
        }
    }
}

export function fetchItemDetail(id) {
    return async (dispatch) => {
        try {
            if (id) {
                const response = await fetch(baseUrl + '/items/' + id, {
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                const result = await response.json()
                if (!response.ok) {
                    throw result
                }
                dispatch({
                    type: ITEMDETAIL_FETCH_SUCCESS,
                    payload: result
                })
            }
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function fetchCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/categories', {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            dispatch({
                type: CATEGORIES_FETCH_SUCCESS,
                payload: resData
            })
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function fetchCategoryDetail(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/categories/' + id, {
                method: 'get',
                headers: {
                    access_token
                }
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            dispatch({
                type: CATEGORYDETAIL_FETCH_SUCCESS,
                payload: result
            })
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function addItem(data) {
    console.log(data, "<<<<< ini di action")
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/items', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }

            await dispatch(fetchItems())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function putItem(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/items/' + data.id, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            await dispatch(fetchItems())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function deleteItem(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/items/' + id, {
                method: 'delete',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                }
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            await dispatch(fetchItems())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function addCategory(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/categories', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            await dispatch(fetchCategories())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function putCategory(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/categories/' + data.id, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            await dispatch(fetchCategories())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function deleteCategory(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/categories/' + id, {
                method: 'delete',
                headers: {
                    access_token
                }
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            await dispatch(fetchCategories())
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}

export function registerAdmin(data) {
    return async () => {
        try {
            const response = await fetch(baseUrl + '/register', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    access_token
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (!response.ok) {
                throw result
            }
            swal("top-end", "success", result.message)
        } catch (err) {
            console.log(err)
            swal("center", "error", err.message)
        }
    }
}