import Button from "../../form/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {hideItem, todoSelectors, toggleCheckBox} from "../../../../engine/core/todo/slice";
import {Form} from "react-final-form";
import useStyles from "./useStyles";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import LoginItem from "./LoginItem";
import {todoAsyncActions} from "../../../../engine/core/todo/saga/asyncActions";


export default function TodoItem(props) {
    const {text, id, hide, check} = props;
    const dispatch = useDispatch();
    const items = useSelector(todoSelectors.items);
    const classes = useStyles(props);

    const handleEdit = (newText) => {
        return dispatch(todoAsyncActions.editTodoAsync({ items, id, newText }));
    };
    const showContent = () => {
        dispatch(hideItem({id, hide: !hide}));
    };
    const saveChanges = (values) => {
        const { todoInputEdit } = values;
        return dispatch(todoAsyncActions.saveTodoAsync({todoInputEdit, handleEdit, showContent}))
    };
    const handleRemove = () => {
        return dispatch(todoAsyncActions.removeTodoAsync({id,items}));
    };

    const onChangeCheckbox = () => {
        dispatch(toggleCheckBox({ id, checked: !check }))
    }

    return (
        <div className={`${classes['todo-item']} ${check ? classes['todo-item--checked'] : ''}`}>
            {
                hide ? <Form
                        onSubmit={saveChanges}
                        render={LoginItem}
                        text={text}
                    /> :
                    <div className={`${classes['todo-item__description']} ${check ? classes['todo-item__description--checked'] : ''}`}>{text}</div>
            }
            {
                hide ? undefined :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={handleRemove}
                                text="Удалить"
                                customClass={`${classes['todo-item__delete']}`}
                        />
                        <label className={`${classes['todo-item__checkbox']}`}>
                            <input
                                onChange={onChangeCheckbox}
                                type="checkbox"
                                className={`${classes['todo-item__input-checkbox']}`}
                                name="todoCheckBox"
                            />
                        </label>
                    </>
            }
        </div>
    )
}