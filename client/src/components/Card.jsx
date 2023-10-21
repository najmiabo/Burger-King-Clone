import { Link } from "react-router-dom";

export default function Card({ food }) {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <Link to={"/item/" + food.id}>
                        <img src={food.imgUrl} className="card-img-top" alt={food.name} />
                    </Link>
                    <div className="card-body d-flex">
                        <h3 className="card-text">{food.name}</h3>
                        <Link to={"/item/" + food.id} className="btn btn-warning">Order</Link>
                    </div>
                </div>
            </div>
        </>
    )
}