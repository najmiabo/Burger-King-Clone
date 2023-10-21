import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerAdmin } from "../store/actions/actionCreator"

export default function RegisterFormView() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    })
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(registerAdmin(form))
            .then(() => {
                setForm({
                    username: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    address: ""
                })
            })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-5">Register Admin</h2>
                        <div className="text-center mb-5 text-dark">BurgerKing</div>
                        <div className="card my-5">

                            <form className="card-body cardbody-color p-lg-5" onSubmit={submitHandler}>

                                <div className="text-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1012px-Burger_King_logo_%281999%29.svg.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px" alt="profile" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="User Name" name="username" value={form.username} onChange={changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="Email" name="email" value={form.email} onChange={changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password"
                                        name="password" value={form.password} onChange={changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="Address" name="address" value={form.address} onChange={changeHandler} />
                                </div>
                                <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Register</button></div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}