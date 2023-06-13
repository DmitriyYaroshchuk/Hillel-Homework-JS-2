import React from "react";
import {useSelector} from "react-redux";
import {items} from "../../engine/core/todoSlice";

export default function Footer() {
    const quantityOfItems = useSelector(items)
    return (
        <div style={{fontWeight: 700, fontSize: '25px', color: 'aliceblue'}}>
            Total: {quantityOfItems.length}
        </div>
    )
}