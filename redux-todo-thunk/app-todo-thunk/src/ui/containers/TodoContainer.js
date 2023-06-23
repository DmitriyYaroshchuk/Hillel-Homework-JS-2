import Header from "../components/Header";
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "../components/Item/TodoItem/TodoItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, todoSelectors} from "../../engine/core/todo/todoSlice";
import Footer from "../components/Footer/Footer";
import Container from "./Container/Container";
import Wrapper from "./Wrapper/Wrapper";

export default function TodoContainer () {
    const items = useSelector(todoSelectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchItems = JSON.parse(localStorage.getItem('items')) || [];
        dispatch(addItem(fetchItems));
    },[])
    return (
        <Wrapper>
            <Container>
                <Header/>
                <TodoForm/>
                <div>
                    {
                        items.map(item =>
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                id={item.id}
                                hide={item.hide}
                            />
                        )
                    }
                </div>
                <Footer/>
            </Container>
        </Wrapper>

    )
}