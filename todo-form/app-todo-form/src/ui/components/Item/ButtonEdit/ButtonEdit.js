//_______Core_______//
import React from "react";

//_______Images_______//
import settings from './settings.svg';

//_______Styles_______//
import useStyles from "./useStyles";


export default function ButtonEdit (props) {
    const classes = useStyles(props);
        const { showContent } = props;
        return (
            <button
                onClick={showContent}
                className={`${classes['todo-item__button-editing']}`}
            >
                <img
                    className={`${classes['todo-item__image-editing']}`}
                    src={settings} alt='edit' title='edit'
                />
            </button>
        )
}