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
            items: [
                { id: 0, count: 0, smile: '&#128540;' },
                { id: 1, count: 0, smile: '&#128520;' },
                { id: 2, count: 0, smile: '&#128640;' },
                { id: 3, count: 0, smile: '&#128640;' },
                { id: 4, count: 0, smile: '&#128566;' },
            ],
            winner: null,
        }
        this.increaseVote = this.increaseVote.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }
    increaseVote(id) {
        this.setState(state => {
            const { items } = state;
            const newItems = items.map(item => {
                if (item.id === id) {
                    return { id: id, count: item.count + 1, smile: item.smile}
                }
                return item; // Важно вернуть остальные элементы массива без изменений
            })
            return {
                items: newItems, // Возвращаем новый массив в состояние
            }
        });
    }
    checkWinner() {
        const { items } = this.state;
        let maxItem = 0;
        let maxSmile = '';
        items.forEach(item => {
            if (item.count > maxItem) {
                maxItem = item.count;
                maxSmile = item.smile
            }
        })
        this.setState({
            winner: maxSmile
        })
    }

  render() {
        const { items, winner } = this.state;
    return (
        <Wrapper>
          <List>
            <Item id={items[0].id} count={items[0].count} text={items[0].smile} increaseVote={this.increaseVote}/>
            <Item id={items[1].id} count={items[1].count} text={items[1].smile} increaseVote={this.increaseVote}/>
            <Item id={items[2].id} count={items[2].count} text={items[2].smile} increaseVote={this.increaseVote}/>
            <Item id={items[3].id} count={items[3].count} text={items[3].smile} increaseVote={this.increaseVote}/>
            <Item id={items[4].id} count={items[4].count} text={items[4].smile} increaseVote={this.increaseVote}/>
          </List>
          <ButtonResult checkWinner={this.checkWinner}/>
          <Winner text={winner}/>
        </Wrapper>
    )
  }
}

