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
            vote1: 0,
            vote2: 0,
            vote3: 0,
            vote4: 0,
            vote5: 0,
        }
        this.increaseVote = this.increaseVote.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }
    increaseVote(id) {
        this.setState(state => {
            return {
                [id]: state[id] + 1
            }
        })
    }
    checkWinner() {
        const winner = Math.max(...Object.values(this.state))
        console.log('winner: ', winner)
        this.setState( {
            winner
        })
    }
  render() {
    return (
        <Wrapper>
          <List>
            <Item text="&#128540;" id="vote1" increaseVote={this.increaseVote} state={this.state}/>
            <Item text="&#128520;" id="vote2" increaseVote={this.increaseVote} state={this.state}/>
            <Item text="&#128640;" id="vote3" increaseVote={this.increaseVote} state={this.state}/>
            <Item text="&#128526;" id="vote4" increaseVote={this.increaseVote} state={this.state}/>
            <Item text="&#128566;" id="vote5" increaseVote={this.increaseVote} state={this.state}/>
          </List>
          <ButtonResult checkWinner={this.checkWinner} />
          <Winner winner={this.state.winner}/>
        </Wrapper>
    )
  }
}

