import React from "react";
import Button from "../form/Button";
import ButtonEdit from "./ButtonEdit";
import Input from "../form/Input";
import ButtonSave from "./ButtonSave";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        }
        this.showContent = this.showContent.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    showContent() {
        this.setState({
            hide: !this.state.hide,
        });
    }
    saveChanges() {
        const { handleEditing, text, id } = this.props;
        handleEditing(id, text)
        this.showContent()
    }
    render() {
        const { text, id, handleRemove } = this.props;
        const { hide } = this.state;
        const onClick = () => handleRemove(id);
        return (
            <div className="todo-item">
                {
                    hide ? (<Input editableText={text}/>) : <div className="todo-item__description">{text}</div>
                }
                {
                    hide ? (<ButtonSave saveChanges={this.saveChanges} customClass='todo-item__button-save'/>) :
                        <>
                            <ButtonEdit showContent={this.showContent} />
                            <Button onClick={onClick} text="Удалить" customClass="todo-item__delete"/>
                        </>
                }
            </div>
        )
    }
}
export default TodoItem;