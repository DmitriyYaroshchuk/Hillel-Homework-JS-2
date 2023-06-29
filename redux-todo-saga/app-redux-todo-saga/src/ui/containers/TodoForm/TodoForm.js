import {useDispatch, useSelector} from "react-redux";
import {Form} from "react-final-form";
import LoginForm from "./LoginForm";
import {todoSelectors} from "../../../engine/core/todo/slice";
import {todoAsyncActions} from "../../../engine/core/todo/saga/asyncActions";

export default function TodoForm() {
    const dispatch = useDispatch();
    const items = useSelector(todoSelectors.items);
    const handleSubmit = value => dispatch(todoAsyncActions.addTodoAsync({value, items}));
    return (
        <Form
            onSubmit={handleSubmit}
            render={LoginForm}
        />
    )
}