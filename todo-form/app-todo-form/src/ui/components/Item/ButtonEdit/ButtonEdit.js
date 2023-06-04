import React from "react";
import settings from './settings.svg';
import './ButtonEdit.css'
export default function ButtonEdit (props) {
        const { showContent } = props;
        return (
            <button onClick={showContent} className='todo-item__button-editing'>
                <img className='todo-item__image-editing' src={settings} alt='edit' title='edit'/>
            </button>
        )
}