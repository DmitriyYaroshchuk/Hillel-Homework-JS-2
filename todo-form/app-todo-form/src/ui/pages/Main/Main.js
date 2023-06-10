//_______Core_______//
import React, {useEffect, useState} from "react";

//_______Components_______//
import Header from "../../components/Header";
import TodoItem from "../../components/Item/TodoItem/TodoItem";
import TodoForm from "../../components/form/TodoForm/TodoForm";

//_______Styles_______//
import '../../../reset.css';
import useStyles from "./useStyles";

export default function Main(props) {
    const classes = useStyles(props)
    const [items, setItems] = useState([]);
    useEffect(
        () => {
            const storedItems = JSON.parse(localStorage.getItem('items')) || [];
            setItems(storedItems);
        },
        []
    )
    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems);
    }
    const handleEditing = (id, newText) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return {...item, text: newText}
            }
            return item
        })
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setItems(updatedItems);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Header/>
                <TodoForm items={items} setItems={setItems}/>
                <div>
                    {
                        items.map(item =>
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                id={item.id}
                                handleRemove={handleRemove} handleEditing={handleEditing}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

