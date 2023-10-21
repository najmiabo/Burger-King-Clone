import CategoryOption from "./CategoryOption"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from "../store/actions/actionCreator"

export default function FormAddItemModal() {
    const [submitted, setSubmitted] = useState(true)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        imgUrl: "",
        categoryId: "",
        ingredients: [{ name: "" }]
    })
    const { categories } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()

    const handleIngredientsAdd = () => {
        setData({
            ingredients: [
                ...data.ingredients,
                { name: "" }
            ]
        })
    }

    const handleIngredientsRemove = (index) => {
        const list = [...data.ingredients]
        list.splice(index, 1);
        setData({
            ...data,
            ingredients: list
        })
    }

    const handleIngredientsChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...data.ingredients];
        list[index][name] = value;
        setData({ ...data, ingredients: list })
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem(data))
            .then(() => {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    imgUrl: "",
                    categoryId: "",
                    ingredients: [{ name: "" }]
                })
            })
    }

    useEffect(() => {
        const dataIngredients = (val) => val.name
        if (data.name && data.description && data.price && data.imgUrl && data.categoryId && data.ingredients.every(dataIngredients) && data.price >= 10000) {
            setSubmitted(true)
        } else {
            setSubmitted(false)
        }
    }, [data])

    return (
        <>
            {/* MODAL */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Item</h1>
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
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Ingredient:</label>
                                    {
                                        data.ingredients.map((el, idx) => {
                                            return <div className="d-flex flex-row mb-2" key={idx}>
                                                <input name="name" value={el.name} type="text" className="form-control" onChange={(e) => handleIngredientsChange(e, idx)} />
                                                <button disabled={data.ingredients.length <= 1} type="button" className="btn btn-link trash" onClick={() => handleIngredientsRemove(idx)} ><i className="bi bi-trash"></i></button>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success ingredient-add-btn" onClick={handleIngredientsAdd}>Add Ingredient</button>
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