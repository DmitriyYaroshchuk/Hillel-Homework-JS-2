import React from "react";
import Logo from "./Logo";
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Logo/>
                </div>
            </header>
        )
    }
}