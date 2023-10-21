import { useEffect, useState } from "react"
import { putCategory } from "../store/actions/actionCreator"
import { useDispatch, useSelector } from "react-redux"

export default function FormEditCategoryModal() {
    const [data, setData] = useState({
        name: ''
    })
    const [submitted, setSubmitted] = useState(true)
    const dispatch = useDispatch()
    const { category } = useSelector((state) => state.categoryReducer)

    const changeNameHandler = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(putCategory(data))
    }

    useEffect(() => {
        if (category) {
            setData(category)
        }
    }, [category])

    useEffect(() => {
        if (data.name) {
            setSubmitted(true)
        } else {
            setSubmitted(false)
        }
    }, [data])
    return (
        <>
            <div className="modal fade" id="editCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={submitHandler}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Category</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" value={data.name} onChange={changeNameHandler} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss={submitted ? "modal" : ""}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}