import { fetchCategories } from "../store/actions/actionCreator"
import CategoryTableRow from "../components/CategoryTableRow"
import FormAddCategoryModal from "../components/FormAddCategoryModal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FormEditCategoryModal from "../components/FormEditCategoryModal"

export default function CategoriesView() {
    const [loading, setLoading] = useState(false)
    const { categories } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchCategories())
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
        <div style={{ fontSize: 18 }}>

            <FormAddCategoryModal />
            <FormEditCategoryModal />
            <h1>Category</h1>

            <button className="btn btn-lg btn-primary my-3" data-bs-toggle="modal" data-bs-target="#addCategoryModal">Add Category <i className="bi bi-plus-lg"></i></button>

            <table className="table table-striped">
                <thead className="text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((el, idx) => {
                            return <CategoryTableRow key={el.id} category={el} index={idx} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}