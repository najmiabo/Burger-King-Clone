import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchItemDetail } from "../store/actions/actionCreator"

export default function ItemDetailView() {
    const { item } = useSelector((state) => state.itemReducer)
    const { id } = useParams()
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        imgUrl: "",
        User: {
            username: ""
        },
        Category: {
            name: ""
        },
        Ingredients: [{ name: "" }]
    })
    const [loading, setLoading] = useState(false)
    const ingredients = data.Ingredients.map((el) => el.name).join(", ")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchItemDetail(id, navigate))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (item) {
            setData(item)
        }
    }, [item])

    if (!item || loading) {
        return (
            <>
                <div className="container vh-100  mt-5">
                    <div className="d-flex justify-content-center mb-3">
                        <button className="btn btn-warning" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Loading...</span>
                        </button>
                    </div>
                    <div className="index text-center">
                        <h1>Item Not Found</h1>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center detail-title">Detail</h1>
                <div className="index content-detail">
                    <div className="d-flex">
                        <div>
                            <img src={data.imgUrl} width={600} alt={data.name} />
                        </div>
                        <div className="ms-5">
                            <h1>{data.name}</h1>
                            <h3>{data.Category.name}</h3>
                            <hr className="border border-danger border-2 opacity-50"></hr>
                            <p>{data.description}</p>
                            <h5>Rp. {data.price.toLocaleString('id-ID')}</h5>
                            <hr className="border border-danger border-2 opacity-50"></hr>
                            <span className="upload-by mt-5">Uploaded by {data.User.username}</span>
                        </div>
                    </div>
                    <p className="mt-5">Ingredient: {ingredients}</p>
                </div>
            </div>
        </>
    )
}