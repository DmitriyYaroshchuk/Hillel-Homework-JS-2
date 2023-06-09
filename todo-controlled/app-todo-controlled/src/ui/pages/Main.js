import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import TodoItem from "../components/Item/TodoItem";
import TodoForm from "../containers/TodoForm";
import '../../main.css';
import Container from "../containers/Container";
import {useFormField} from "../hooks/useFormField";
export default function Main() {
    const [ items, setItems ] = useState([]);
    const todoInput = useFormField('');
    useEffect(
        () => {
            const storedItems = JSON.parse(localStorage.getItem('items')) || [];
            setItems(storedItems);
        },
        []
    );
    const handleAdd = (event) => {
        event.preventDefault();
        let text = todoInput.value;
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        todoInput.onChange({target: {value: ''}});
    }
    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems);
    }
    const handleEditing = (id, newText) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, text: newText }
            }
            return item
        })
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setItems(updatedItems);
    }
    return (
        <>
            <Container>
                <Header/>
                <TodoForm handleAdd={handleAdd}
                          value={todoInput.value}
                          onChange={todoInput.onChange}
                />
                <div>
                    {
                        items.map(item =>
                            <TodoItem key={item.id}
                                      text={item.text}
                                      id={item.id}
                                      handleRemove={handleRemove}
                                      handleEditing={handleEditing}/>
                        )
                    }
                </div>
            </Container>
        </>
    )
}

