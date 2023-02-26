import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_email, add_password, login_logout, add_username} from "./Redux/Slices/loginSlice"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const email = useSelector((state) => state.LoginSlice.email)
    const password = useSelector((state) => state.LoginSlice.password)
    const username = useSelector((state) => state.LoginSlice.username)
    const isLoggedIn = useSelector((state) => state.LoginSlice.isLoggedIn)
    const navigate = useNavigate()


    // makes the "Email" Input controlled. Sends the input to the Login-Redux-Slice.
    const handleEmail = (e) => {
        dispatch(add_email(
          e.target.value
        ))
    }

    const handlePassword = (e) => {
        dispatch(add_password(
            e.target.value
        ))
    }

    const change_login_logout = () => {
        dispatch(login_logout())
        console.log(isLoggedIn)
    }

    const handleUsername = (input) => {
        dispatch(add_username(
          input
        ))
        console.log(username)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/"

        const jsBody = {
            "email": email,
            "password": password
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsBody)
        
        }
        fetch(url, config).then(response => {
            if (response.status === 200) {
                console.log(response)
                return response.json()
            }
            else (alert("The email or password is incorrect. If you don't have an account yet, please register."))
        }).then(data => handleUsername(data.user.username))
        change_login_logout();
        navigate('../')
    }

    return (
        <form onSubmit={handleLogin} className="login">
            <h4>e-mail</h4>
            <input type={"text"} value={email} onChange={handleEmail} />
            <h4>password</h4>
            <input type={"password"} value={password} onChange={handlePassword} />
            <button type="Submit">Login</button>
            <button><Link to="registration">Register</Link></button>
        </form>
    )
}

export default Login