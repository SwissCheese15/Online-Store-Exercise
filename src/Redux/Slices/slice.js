// Standard Import for Slice
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        // [Article, amount, price for one]
        content: [],
        total: 0

    },
    reducers: {
        // adding item to cart
        add_item: (state, action) => {

            // Add the price of the added shirt to the Total
            state.total += action.payload.price

            // conditional to check if shirt object is already in cart
            // if yes, increase the value of the "amount" key of that object
            if (state.content.find(e => e.id === action.payload.id)) {
                state.content.map(e => {
                   if (e.id === action.payload.id) {
                       e.amount += 1
                   }
               })
            }
            // if shirt object not yet in cart, add to cart
            else {
                state.content.push(action.payload)}
        },

        delete_item: (state, action) => {

            // deduct the total price of the deleted t-shirts from the Total
            state.total -= action.payload.price * action.payload.amount

            state.content.map(e => {
                if (e.id === action.payload.id) {
                    state.content.splice(state.content.indexOf(e), 1)
                }
            })
        },

         // adding one more item to cart
         add_one_item: (state, action) => {

            // Add the price of the added shirt to the Total
            state.total += action.payload.price

            // conditional to check if shirt object is already in cart
            // if yes, increase the value of the "amount" key of that object
        
            state.content.map(e => {
                if (e.id === action.payload.id) {
                    e.amount += 1
                }
            })
        },

         // adding one more item to cart
         remove_item: (state, action) => {

            // Add the price of the added shirt to the Total
            state.total -= action.payload.price

            // conditional to check if shirt object is already in cart
            // if yes, increase the value of the "amount" key of that object
        
            state.content.map(e => {
                if (e.id === action.payload.id) {
                    e.amount -= 1
                }
            })
        },
}});

export const { add_item, delete_item, add_one_item, remove_item } = CartSlice.actions;
export default CartSlice.reducer;
