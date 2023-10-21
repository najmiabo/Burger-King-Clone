import { useEffect, useState } from "react"
import ProductTableRow from "../components/ProductTableRow"
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from "../store/actions/actionCreator"
import FormAddItemModal from "../components/FormAddItemModal"
import FormEditItemModal from "../components/FormEditItemModal"

export default function HomeView() {

    const [loading, setLoading] = useState(false)
    const { items } = useSelector((state) => state.itemReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchItems())
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        </div>

    }

    return (
        <>
            <FormAddItemModal />
            <FormEditItemModal />

            <h1>Dashboard</h1>

            <button type="button" className="btn btn-primary btn-lg my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Item <i className="bi bi-plus-lg"></i></button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((el, idx) => {
                            return <ProductTableRow key={el.id} item={el} idx={idx} />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}