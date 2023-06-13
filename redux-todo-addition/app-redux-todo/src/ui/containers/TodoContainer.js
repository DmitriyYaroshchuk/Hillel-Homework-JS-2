import Header from "../components/Header";
import TodoForm from "./TodoForm";
import TodoItem from "../components/Item/TodoItem";
import React, {useRef} from "react";
import Wrapper from "./Wrapper";
import Container from "./Container";
import {useDispatch, useSelector} from "react-redux";
import {addItem, items} from "../../engine/core/todoSlice";
import Footer from "../components/Footer";

function TodoContainer() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const itemsTodo = useSelector(items);
    const handleAdd = (event) => {
        event.preventDefault();
        const text = inputRef.current.value;
        dispatch(addItem(text));
        inputRef.current.value = '';
    }
    return (
        <Wrapper >
            <Container>
                <Header/>
                <TodoForm handleAdd={handleAdd} inputRef={inputRef}/>
                <div>
                    {
                        itemsTodo.map(item =>
                            <TodoItem text={item.text} key={item.id}/>
                        )
                    }
                </div>
                <Footer/>
            </Container>
        </Wrapper>
    )
}
export default TodoContainer;