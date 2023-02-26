import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_item, add_one_item, remove_item } from "./Redux/Slices/slice";
import Total from "./Components/Total";
import { Link } from "react-router-dom";

// Displays Shopping Cart
const Cart = () => {

    const currentItems = useSelector((state) => state.cart.content)
    const username = useSelector((state) => state.LoginSlice.username)

    const dispatch = useDispatch()

    // Handle click on the "delete item" button
    const handleDeleteButton= (item) => {
        dispatch(delete_item( 
            item
        ))
    }

    // Handle click on the "add item" button
    const handleAddButton= (item) => {
        dispatch(add_one_item( 
            item
        ))
    }

    // Handle click on the "remove item" button
    const handleRemoveButton= (item) => {
        dispatch(remove_item( 
            item
        ))
    }

    // Render for this Component
    return (
        <div className="cart">
        <h1>{username}'s Shopping Cart</h1>
            <ul>
                {/* Titles at the top of the "grid" */}
                <li>
                    <div className="cartLiTitle">
                        <div className="cartLiTitleChild">Options</div>
                        <div className="cartLiTitleChild">Image</div>
                        <div className="cartLiTitleChild">Article</div>
                        <div className="cartLiTitleChild">Price</div>
                        <div className="cartLiTitleChild">Amount</div>
                        <div className="cartLiTitleChild">Total</div>
                    </div>
                </li>
                {/* Mapping through "Global Redux Store Cart-State" to render the Shirts in the cart*/}
                {currentItems.map(item => 
                <li key={item.name}>
                    <div className="cartLiItem">
                    {/* button to add item one more time */}
                    <button onClick={() => handleAddButton(item)} className="oneMoreButton cartButton">+</button>    
                    {/* button to remove item one time */}
                    <button onClick={() => handleRemoveButton(item)} className="oneLessButton cartButton">-</button>    
                    {/* button to remove the item from the store entirely    */}
                    <button onClick={() => handleDeleteButton(item)} className="deleteButton"><img src="Images/RemoveIcon.png"></img></button>
                        <div className="cartLiItemChild"><img src={item.image} className="cartImage"></img></div>
                        <div className="cartLiItemChild">{item.name}</div>
                        <div className="cartLiItemChild">{item.price}</div>
                        <div className="cartLiItemChild">{item.amount}</div>
                        <div className="cartLiItemChild">{item.price * item.amount}</div>
                    </div>
                </li>)}
            </ul>
            <Total></Total>
            {/* button that tahes the user back to the store */}
            <button className="continueShopping"><Link to="../">Continue Shopping</Link></button>
        </div>
    )

}

export default Cart;