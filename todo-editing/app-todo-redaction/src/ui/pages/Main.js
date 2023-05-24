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
        this.handleEditing = this.handleEditing.bind(this);
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
    handleEditing(id, newText) {
        this.setState(state => {
            const { items } = state;
            const updatedItems = items.map(item => {
                if (item.id === id) {
                    return { ...item, text: newText }
                }
                return item
            })
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return {
                items: updatedItems
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
                                <TodoItem key={item.id} text={item.text} id={item.id} handleRemove={this.handleRemove} handleEditing={this.handleEditing} />
                            )
                        }

                    </div>
                </div>
            </>
        );
    }
}
export default Main;
