import { useEffect, useState } from "react"
import CategoryOption from "./CategoryOption"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, putItem } from "../store/actions/actionCreator"

export default function FormEditItemModal() {
    const [submitted, setSubmitted] = useState(true)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        imgUrl: "",
        categoryId: ""
    })
    const { categories } = useSelector((state) => state.categoryReducer)
    const { item } = useSelector((state) => state.itemReducer)
    const dispatch = useDispatch()

    const onChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(putItem(data, data.id))
    }

    useEffect(() => {
        dispatch(fetchCategories())
        if (item) {
            setData(item)
        }
    }, [item])

    useEffect(() => {
        if (data.name && data.description && data.price && data.imgUrl && data.categoryId) {
            setSubmitted(true)
        } else {
            setSubmitted(false)
        }
    }, [data])

    return (
        <>
            {/* MODAL */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel1">Edit Item</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" onChange={onChange} value={data.name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Description:</label>
                                    <input type="text" className="form-control" name="description" onChange={onChange} value={data.description} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Price:</label>
                                    <input type="number" className="form-control" name="price" onChange={onChange} value={data.price} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Image Url:</label>
                                    <input type="text" className="form-control" name="imgUrl" onChange={onChange} value={data.imgUrl} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Category:</label>
                                    <select className="form-select" aria-label="Default select example" name="categoryId" onChange={onChange} value={data.categoryId} >
                                        <option value="" disabled>--Select Category--</option>
                                        {
                                            categories.map((el) => {
                                                return <CategoryOption key={el.id} category={el} />
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss={submitted ? 'modal' : ''}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            {/* END MODAL */}
        </>
    )
}