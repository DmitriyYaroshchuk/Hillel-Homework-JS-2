import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'todo-item__button-editing': {
        'padding': '0',
        'border': 'none',
        'background-color': 'transparent',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-right': '10px',
    },
    'todo-item__image-editing': {
        'width': '28px',
        'height': '35px',
    }
});
export default useStyles;