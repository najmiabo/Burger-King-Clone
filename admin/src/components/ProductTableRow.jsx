import { useDispatch, useSelector } from "react-redux"
import { deleteItem, fetchItemDetail } from "../store/actions/actionCreator"

export default function ProductTableRow({ item, idx }) {
    const ingredients = item.Ingredients.map(el => el.name).join(', ')
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(fetchItemDetail(id))
    }

    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteItem(id))
    }
    return (
        <>
            <tr className="align-middle">
                <th scope="row">{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>Rp.{item.price.toLocaleString('id-ID')}</td>
                <td>
                    <img src={item.imgUrl} alt={item.name} className="table-image" />
                </td>
                <td>{item.User.email}</td>
                <td>{item.Category.name}</td>
                <td>{ingredients}</td>
                <td>
                    <button className="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => handleClick(item.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
        </>
    )
}