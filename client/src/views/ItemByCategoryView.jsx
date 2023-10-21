import { useDispatch, useSelector } from "react-redux";
import { ByCategoryCard } from "../components/ByCategoryCard";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { fetchCategory } from "../store/actions/actionCreator";

export default function ItemByCategoryView() {
    const [loading, setLoading] = useState(false)
    const { categories } = useSelector((state) => state.categoryReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        dispatch(fetchCategory())
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="vh-100 mt-5">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-warning" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                    </button>
                </div>
            </div>

        )
    }
    return (
        <>
            {/* <Carousel /> */}
            <div className="container mt-5">
                <div className="index">
                    {
                        categories.map((el) => {
                            return (<div key={el.id}>
                                <h2 className="text-center menu-title">{el.name}</h2>
                                <hr className="border border-danger border-2 opacity-50 mb-5"></hr>
                                <div className="row g-4 mb-5">
                                    {
                                        el.Items.map((item) => {
                                            return <ByCategoryCard key={item.id} item={item} />
                                        })
                                    }
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}