import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_email, add_password, add_code, add_first, add_last, add_password_rep, add_username } from "./Redux/Slices/loginSlice"
import { useNavigate } from "react-router-dom";

const Validation= () => {

    const dispatch = useDispatch()
    const email = useSelector((state) => state.LoginSlice.email)
    const password = useSelector((state) => state.LoginSlice.password)
    const username = useSelector((state) => state.LoginSlice.username)
    const code = useSelector((state) => state.LoginSlice.code)
    const password_rep = useSelector((state) => state.LoginSlice.password_rep)
    const first_name = useSelector((state) => state.LoginSlice.first_name)
    const last_name = useSelector((state) => state.LoginSlice.last_name)
    const navigate = useNavigate()

    // makes the "Email" Input controlled. Sends the input to the Login-Redux-Slice.
    const handleEmail = (e) => {
        dispatch(add_email(
          e.target.value
        ))
    }
    const handleUsername = (e) => {
        dispatch(add_username(
          e.target.value
        ))
    }
    const handleCode = (e) => {
        dispatch(add_code(
          e.target.value
        ))
    }
    const handlePassword = (e) => {
        dispatch(add_password(
          e.target.value
        ))
    }
    const handlePassword_rep = (e) => {
        dispatch(add_password_rep(
          e.target.value
        ))
    }
    const handleFirst = (e) => {
        dispatch(add_first(
          e.target.value
        ))
    }
    const handleLast = (e) => {
        dispatch(add_last(
          e.target.value
        ))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/"

        const jsBody = {
            "email": email,
            "username": username,
            "code": code,
            "password": password,
            "password_repeat": password_rep,
            "first_name": first_name,
            "last_name": last_name
        }

        const config = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsBody)
        }

        fetch(url, config).then(response => {
            if (response.status === 200) {
                console.log(response)
                return navigate('../login')
            }
            else (alert("Something went wrong. Make sure that the two passwords match. Check your validation code. If it still doesn't work, try a new username."))
        })
    }

    return (
        <form onSubmit={handleSignUp} className="login">
            <p>e-mail</p>
            <input type={"text"} value={email} onChange={handleEmail} />
            <p>username</p>
            <input type={"text"} value={username} onChange={handleUsername} />
            <p>validation code</p>
            <input type={"text"} value={code} onChange={handleCode} />
            <p>password</p>
            <input type={"password"} value={password} onChange={handlePassword} />
            <p>repeat password</p>
            <input type={"password"} value={password_rep} onChange={handlePassword_rep} />
            <p>first name</p>
            <input type={"text"} value={first_name} onChange={handleFirst} />
            <p>last name</p>
            <input type={"text"} value={last_name} onChange={handleLast} />
            <button type="Submit">Get started</button>
        </form>
    )
}

export default Validation