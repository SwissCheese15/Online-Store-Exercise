import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { add_item } from "../../Redux/Slices/slice";
import { Collection } from "../Collection";
import { Link, useNavigate} from "react-router-dom";

// Displays Shop
const Shop = () => {

    const username = useSelector((state) => state.LoginSlice.username)
    const isLoggedIn = useSelector((state) => state.LoginSlice.isLoggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // hook to handle click on "add to cart button"
    const handleButton = (item) => {
        
        dispatch(add_item(
            item
        ))
        console.log(username)
    }

    const handleToCart = () => {
        if (username) {
            navigate("/cart")
        }
        else {
            navigate("/login")
            alert("You must be logged in to look at your Cart. Please register or log in if you have an account.")
        }
    }

    const displayLoginState = () => {
        if (isLoggedIn) {
            return " logged in"
        }
        else {
            return "not logged in"
        }
    }

    // Render for this Component
    return (
        <div>
            <h1>T-Shirt Shop</h1>
            <p>You are currently {displayLoginState()}</p>
            <ul>
                {/* Titles at the top of the "grid" */}
                <li>
                    <div className="cartLiTitle">
                        <div className="cartLiTitleChild">Image</div>
                        <div className="cartLiTitleChild">Article</div>
                        <div className="cartLiTitleChild">Price</div>
                    </div>
                </li>
                {/* Mapping through "Collection" to render the Shirts for sale in the Store*/}
                {Collection.map(item => 
                <li key={item.name}>
                    <div className="shopLiItem">
                        {/* Rendering an "add to cart" Button for each Shirt */}
                        <button onClick={() => handleButton(item)} className="cartButton"><img src="Images/AddToCart.png"></img></button>
                        <div className="cartLiItemChild"><img src={item.image} className="cartImage"></img></div>
                        <div className="cartLiItemChild">{item.name}</div>
                        <div className="cartLiItemChild">{item.price}</div>
                    </div>
                </li>)}
                {/* button that takes the user to the cart page */}
                <button onClick={() => handleToCart()}>Cart</button>
                {/* button that takes the user to the login page */}
                <button><Link to="/login">Login</Link></button>
            </ul>
        </div>
    )
}

export default Shop