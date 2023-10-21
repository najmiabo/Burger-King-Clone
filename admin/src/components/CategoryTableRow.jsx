import { useDispatch } from "react-redux"
import { deleteCategory, fetchCategoryDetail } from "../store/actions/actionCreator"
deleteCategory

export default function CategoryTableRow({ category, index }) {
    const dispatch = useDispatch()
    const clickHandler = (id) => {
        dispatch(fetchCategoryDetail(id))
    }

    const deleteHandler = (id) => {
        dispatch(deleteCategory(id))
    }
    return (
        <>
            <tr className="text-center">
                <th scope="row">{index + 1}</th>
                <td>{category.name}</td>
                <td>
                    <button className="btn btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#editCategoryModal" onClick={() => clickHandler(category.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteHandler(category.id)}>Delete</button>
                </td>
            </tr>
        </>
    )
}