import Button from "../../form/Button/Button";
import {useDispatch} from "react-redux";
import {hideItem} from "../../../../engine/core/todo/todoSlice";
import {Form} from "react-final-form";
import useStyles from "./useStyles";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import LoginItem from "./LoginItem";
import LoginCheckbox from "./LoginCheckbox";
import {handleRemoveThunk} from "../../../../engine/core/todo/thunkRemove";
import {handleEditThunk, saveChangesThunk} from "../../../../engine/core/todo/thunkEdit";


export default function TodoItem(props) {
    const {text, id, hide} = props;
    const dispatch = useDispatch();
    const classes = useStyles(props);

    const handleEdit = (newText) => dispatch(handleEditThunk({ id, newText }));
    const showContent = () => {
        dispatch(hideItem({id, hide: !hide}))
    };
    const saveChanges = (event) => dispatch(saveChangesThunk(event, handleEdit, showContent));
    const handleRemove = () => dispatch(handleRemoveThunk(id));
    const handleSubmit = event => {
        console.log(event);
    };


    return (
        <div className={`${classes['todo-item']}`}>
            {
                hide ? <Form
                        onSubmit={handleSubmit}
                        render={LoginItem}
                        saveChanges={saveChanges}
                        text={text}
                    /> :
                    <div className={`${classes['todo-item__description']}`}>{text}</div>
            }
            {
                hide ? undefined :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={handleRemove}
                                text="Удалить"
                                customClass={`${classes['todo-item__delete']}`}
                        />
                        <Form
                            onSubmit={handleSubmit}
                            render={LoginCheckbox}
                        >
                        </Form>
                    </>
            }
        </div>
    )
}