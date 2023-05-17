import React from "react";
import Button from "./Button";
import Count from "./Count";

export default class Item extends React.Component {
    render() {
        const { id, text } = this.props;
        return (
            <li>
                <Button id={id} text={text}/>
                <Count text="0"/>
            </li>
        )
    }
}