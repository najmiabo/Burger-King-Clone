import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { handleLogin } from '../store/actions/actionCreator'

export default function LoginView() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // function handleLogin() {
    //     localStorage.setItem("access_token", "bujank")
    //     navigate("/")
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(handleLogin({ email, password }, navigate))
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-5">Admin Login</h2>
                        <div className="text-center mb-5 text-dark">BurgerKing</div>
                        <div className="card my-5">

                            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

                                <div className="text-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1012px-Burger_King_logo_%281999%29.svg.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px" alt="profile" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" onChange={(el) => setEmail(el.target.value)} name="email"
                                        placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="password" onChange={(el) => setPassword(el.target.value)} name="password" />
                                </div>
                                <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}