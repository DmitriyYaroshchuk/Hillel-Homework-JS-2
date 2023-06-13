import React from "react";
export default function TodoItem(props) {
    const { text } = props;

    return (
        <>

            <div className="todo-item ">
                <div className="todo-item__description">{text}</div>
            </div>
        </>
    )
}