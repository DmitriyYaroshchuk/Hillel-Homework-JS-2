import {useDispatch, useSelector} from "react-redux";
import {addItem, todoSelectors} from "../../../engine/core/todo/slice";
import Button from "../form/Button/Button";
import useStyles from "./useStyles";

export default function Footer(props) {
    const length = useSelector(todoSelectors.length);
    const dispatch = useDispatch();
    const classes = useStyles(props);
    const clearTodos = () => {
        dispatch(addItem([]));
        localStorage.setItem('items', JSON.stringify([]))
    }
    return (
        <footer>
            <span className={`${classes['todo__total-items']}`}>Total: {length}</span>
            <Button
                customClass={`${classes["todo__button-clean"]}`}
                onClick={clearTodos}
                text="Clear"
            />
        </footer>
    )
}