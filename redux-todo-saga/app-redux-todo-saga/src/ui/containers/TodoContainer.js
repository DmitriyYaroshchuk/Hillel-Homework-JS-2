import Header from "../components/Header";
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "../components/Item/TodoItem/TodoItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoSelectors} from "../../engine/core/todo/slice";
import Footer from "../components/Footer/Footer";
import Container from "./Container/Container";
import Wrapper from "./Wrapper/Wrapper";
import {todoAsyncActions} from "../../engine/core/todo/saga/asyncActions";

export default function TodoContainer () {
    const items = useSelector(todoSelectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todoAsyncActions.getTodoAsync())
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
                                check={item.check}
                            />
                        )
                    }
                </div>
                <Footer/>
            </Container>
        </Wrapper>

    )
}