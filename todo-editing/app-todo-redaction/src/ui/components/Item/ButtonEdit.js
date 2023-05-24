import React from "react";
import settings from './settings.svg'
export default class ButtonEdit extends React.Component {
    render() {
        const { showContent } = this.props;
        return (
            <button onClick={showContent} className='todo-item__button-editing'>
                <img className='todo-item__image-editing' src={settings} alt='edit' title='edit'/>
            </button>
        )
    }
}