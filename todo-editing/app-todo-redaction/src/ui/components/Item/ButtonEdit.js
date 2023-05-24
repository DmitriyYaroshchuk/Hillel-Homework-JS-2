import React from "react";
import settings from './settings.svg'
export default class ButtonEdit extends React.Component {
    render() {
        const { changeEditing } = this.props;
        return (
            <button onClick={changeEditing} className='todo-item__button-editing'>
                <img className='todo-item__image-editing' src={settings} alt='edit' title='edit'/>
            </button>
        )
    }
}