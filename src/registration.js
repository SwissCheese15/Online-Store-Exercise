import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_email, add_password } from "./Redux/Slices/loginSlice"
import { useNavigate } from "react-router-dom";
import Validation from "./validation";

const Registration = () => {

    const dispatch = useDispatch()
    const email = useSelector((state) => state.LoginSlice.email)
    const password = useSelector((state) => state.LoginSlice.password)
    const navigate = useNavigate()

    // makes the "Email" Input controlled. Sends the input to the Login-Redux-Slice.
    const handleEmail = (e) => {
        dispatch(add_email(
          e.target.value
        ))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/"

        const jsBody = {
            "email": email,
        }

        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsBody)
        }

        fetch(url, config).then(response => {
           navigate("validation")
        })
    }

    return (
        <form onSubmit={handleSignUp} className="login">
            <h4>e-mail</h4>
            <input type={"text"} value={email} onChange={handleEmail} />
            <button type="Submit">Get started</button>
        </form>
    )
}

export default Registration