import {useDispatch} from "react-redux";
import {Form} from "react-final-form";
import LoginForm from "./LoginForm";
import {handleAddThunk} from "../../../engine/core/todo/thunks/thunkAdd";

export default function TodoForm() {
    const dispatch = useDispatch();
    const handleSubmit = value => dispatch(handleAddThunk(value));
    return (
        <Form
            onSubmit={handleSubmit}
            render={LoginForm}
        />
    )
}