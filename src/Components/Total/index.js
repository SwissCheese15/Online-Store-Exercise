import React from "react";
import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { add_item } from "../../Redux/Slices/slice";
import { useEffect } from "react";

export const Total = () => {

    const currentTotal = useSelector((state) => state.cart.total)

    // const currentItems = useSelector((state) => state.cart.content)

    // useEffect(() => {
    //    calculateTotal()
    // }, [currentItems]);

    //  const calculateTotal= () => {
         
    //         currentItems.map(item =>
    //         setTotal(totalState + (item.price * item.amount)))
            
    // }

    return<>
      <h2>Total   {currentTotal}</h2>
    </>
  };

  export default Total