import Input from "../components/form/Input";
import React from "react";
import Button from "../components/form/Button";
class TodoForm extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <form className="form" onSubmit={handleAdd}>
                <Input/>
                <Button text="Добавить"/>
            </form>
        )
    }
}
export default TodoForm