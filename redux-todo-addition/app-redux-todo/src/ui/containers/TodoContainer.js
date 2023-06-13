import Header from "../components/Header";
import TodoForm from "./TodoForm";
import TodoItem from "../components/Item/TodoItem";
import React, {useRef, useState} from "react";
import Wrapper from "./Wrapper";
import Container from "./Container";
import {useDispatch} from "react-redux";

function TodoContainer() {
    const [ items, setItems ] = useState([]);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const handleAdd = (event) => {
        event.preventDefault();
        const text = inputRef.current.value;
        dispatch(text);
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        setItems(newItems);
        inputRef.current.value = '';
    }
    return (
        <Wrapper >
            <Container>
                <Header/>
                <TodoForm handleAdd={handleAdd} inputRef={inputRef}/>
                <div>
                    {
                        items.map(item =>
                            <TodoItem text={item.text}/>
                        )
                    }
                </div>
            </Container>
        </Wrapper>
    )
}
export default TodoContainer;