import Button from "../../form/Button/Button";
import {useDispatch} from "react-redux";
import {hideItem, toggleCheckBox} from "../../../../engine/core/todo/slice";
import {Form} from "react-final-form";
import useStyles from "./useStyles";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import LoginItem from "./LoginItem";
import {handleRemoveThunk} from "../../../../engine/core/todo/thunks/thunkRemove";
import {handleEditThunk, saveChangesThunk} from "../../../../engine/core/todo/thunks/thunkEdit";


export default function TodoItem(props) {
    const {text, id, hide, check} = props;
    const dispatch = useDispatch();
    const classes = useStyles(props);

    const handleEdit = (newText) => {
        dispatch(handleEditThunk({ id, newText }))
    }
    const showContent = () => {
        dispatch(hideItem({id, hide: !hide}));
    };
    const saveChanges = (values) => {
        const { todoInputEdit } = values;
        dispatch(saveChangesThunk(todoInputEdit, handleEdit, showContent))
    };
    const handleRemove = () => {
        dispatch(handleRemoveThunk(id));
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