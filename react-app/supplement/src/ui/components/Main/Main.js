import Navigation from "./Navigation";
import Form from "../Form/Form";
import React from "react";
export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="main__content">
                        <Navigation/>
                        <Form/>
                    </div>
                </div>
            </main>
        )
    }
}