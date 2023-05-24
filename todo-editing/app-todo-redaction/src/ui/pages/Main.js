import React from "react";
import Header from "../components/Header";
import TodoItem from "../components/Item/TodoItem";
import TodoForm from "../containers/TodoForm";
import '../../main.css';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    componentDidMount() {
        this.setState({
            items: JSON.parse(localStorage.getItem('items')) || [],
        })
    }

    handleAdd(event) {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems =  [
                ...this.state.items,
                { id: Math.floor(Math.random() * 100), text }
            ]
        this.setState({
            items: newItems
        })
        localStorage.setItem('items', JSON.stringify(newItems))
        input.value = ''
    }
    handleRemove(id) {
        this.setState(state => {
            const { items } = state;
            const newItems = items.filter(item => item.id !== id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return {
                items: newItems,
            }
        })
    }
    render() {
        const { items } = this.state
        return (
            <>
                <div className="container">
                    <Header/>
                    <TodoForm handleAdd={this.handleAdd} />
                    <div>
                        {
                            items.map(item =>
                                <TodoItem key={item.id} text={item.text} id={item.id} handleRemove={this.handleRemove} />
                            )
                        }

                    </div>
                </div>
            </>
        );
    }
}
export default Main;
