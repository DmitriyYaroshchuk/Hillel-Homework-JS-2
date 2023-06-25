import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'todo-item': {
        'display': 'flex',
        'padding': '10px',
        'background': '#fff',
        'border-radius': '10px',
        'justify-content': 'space-between',
        'align-items': 'center',
        'margin-bottom': '10px',
        'transition': '0.4s ease-in-out all',
        'border': '2px solid transparent',
    },
    'todo-item__description': {
        'flex-grow': '1',
        'padding-left': '10px',
        'transition': '0.4s ease-in-out color',
    },

    'todo-item__delete': {
        'background': '#e91e63',
        'border': 'none',
        'cursor': 'pointer',
        'width': '95px',
        'padding': '10px',
        'margin-right': '10px',
    },
    'todo-item__editing': {
        'display': 'flex',
        'width': '100%',
    },
    'todo-item__checkbox': {
        ' display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
    },
    'todo-item__input-checkbox': {
        'height': '25px',
        'width': '25px'
    }
});
export default useStyles;