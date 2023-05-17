import './Main.css';
import React from "react";
import Wrapper from "../containers/Wrapper";
import List from "../containers/List";
import Item from "../components/Item";
import ButtonResult from "../components/ButtonResult";
import Winner from "../components/Winner";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
        <Wrapper>
          <List>
            <Item text="&#128540;" id="btn1"/>
            <Item text="&#128520;" id="btn2"/>
            <Item text="&#128640;" id="btn3"/>
            <Item text="&#128526;" id="btn4"/>
            <Item text="&#128566;" id="btn5"/>
          </List>
          <ButtonResult/>
          <Winner/>
        </Wrapper>
    )
  }
}

