import InputTodo from "./componentsTodo/form/InputTodo";
import ButtonTodo from "./componentsTodo/form/ButtonTodo";

export default function TodoForm(props) {
    const { handleAdd, inputRef } = props;
    return (
        <form className="form" onSubmit={handleAdd}>
            <InputTodo type='text' name='todo-name' required={true} inputRef={inputRef}/>
            <ButtonTodo text="Добавить"/>
        </form>
    )

}