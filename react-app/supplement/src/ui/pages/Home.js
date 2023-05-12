import '../../Home.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import React from "react";

class Home extends React.Component {
    render() {
        return(
                <div className="wrapper">
                    <Header/>
                    <Main/>
                </div>
        )
    }
}

export default Home;
