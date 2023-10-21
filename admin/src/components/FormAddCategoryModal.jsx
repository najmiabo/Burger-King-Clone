import { useEffect, useState } from "react"
import { addCategory } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"

export default function FormAddCategoryModal() {
    const [name, setName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()

    const changeNameHandler = (e) => {
        setName(e.target.value)
    }

    const submitHandler = (e) => {
        console.log(e)
        e.preventDefault()
        dispatch(addCategory({ name }, submitted, setSubmitted))
            .then(() => {
                setName("")
            })
    }

    useEffect(() => {
        if (!name) {
            setSubmitted(false)
        } else {
            setSubmitted(true)
        }
    }, [name])
    return (
        <>
            <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={submitHandler}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" name="name" value={name} onChange={changeNameHandler} />
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