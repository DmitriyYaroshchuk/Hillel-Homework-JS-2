import Button from "../../form/Button/Button";
import {useDispatch} from "react-redux";
import {hideItem, toggleCheckBox} from "../../../../engine/core/todo/todoSlice";
import {Form} from "react-final-form";
import useStyles from "./useStyles";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import LoginItem from "./LoginItem";
import {handleRemoveThunk} from "../../../../engine/core/todo/thunkRemove";
import {handleEditThunk, saveChangesThunk} from "../../../../engine/core/todo/thunkEdit";


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
    const onChangeCheckbox = () => {
        dispatch(toggleCheckBox({ id, checked: !check }))
    }
    // const saveChanges = (values) => {
    //     const { todoInputEdit } = values;
    //     handleEdit(id, todoInputEdit);
    //     showContent();
    // }
    const saveChanges = (values) => {
        const { todoInputEdit } = values;
        console.log('todoInputEdit :', todoInputEdit);
        console.log(handleEdit);
        dispatch(saveChangesThunk(todoInputEdit, handleEdit, showContent))
    };
    const handleRemove = () => dispatch(handleRemoveThunk(id));

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