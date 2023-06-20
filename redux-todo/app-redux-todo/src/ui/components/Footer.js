import {useDispatch, useSelector} from "react-redux";
import {addItem, todoSelectors} from "../../engine/core/todoSlice";
import Button from "./form/Button/Button";

export default function Footer () {
    const length = useSelector(todoSelectors.length);
    const dispatch = useDispatch();
    const clearTodos = () => {
        dispatch(addItem([]));
        localStorage.setItem('items', JSON.stringify([]))
    }
    return (
        <footer>
            Total: {length}
            <Button onClick={clearTodos} text="Clear"/>
        </footer>
    )
}