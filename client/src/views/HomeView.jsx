import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../store/actions/actionCreator'

export default function HomeView() {
    const [loading, setLoading] = useState(false)
    const { items } = useSelector((state) => state.itemReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchItems())
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Carousel />

            {/* CONTENT */}
            <div className="container mt-5">
                <h2 className="text-center mb-5 menu-title">Our Menus</h2>
                <div className="index">
                    <div className="row g-4">
                        {/* CARD */}
                        {
                            loading && <div className="d-flex justify-content-center">
                                <button className="btn btn-warning" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span role="status">Loading...</span>
                                </button>
                            </div>

                        }
                        {
                            items.map((food) => {
                                return <Card key={food.id} food={food} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}