import { Link } from "react-router-dom";

export function ByCategoryCard({ item }) {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <Link to={"/item/" + item.id}>
                        <img src={item.imgUrl} className="card-img-top" alt={item.name} />
                    </Link>
                    <div className="card-body text-center">
                        <h3 className="card-text">{item.name}</h3>
                        <h4 className="card-text" style={{ color: "grey" }}>Rp. {item.price.toLocaleString('id-ID')}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}