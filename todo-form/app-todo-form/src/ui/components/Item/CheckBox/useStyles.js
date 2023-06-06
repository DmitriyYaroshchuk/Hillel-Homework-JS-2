import {createUseStyles} from "react-jss";


const useStyles = createUseStyles({
    'todo-item__span': {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'position': 'relative',
        'cursor': 'pointer',
        '&::before': {
            'content': '""',
            'width': '25px',
            'height': '25px',
            'background-color': '#cdd1d1',
            'border-radius': '3px',
            'transition': '0.3s ease-in-out all',
            'border': '2px solid transparent',
        },
        '&::after': {
            'display': 'inline-block',
            'transition-delay': '0s',
            'transition': '0.6s ease-in-out',
            'content': 'url("check.svg")',
            ' width': '16px',
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'transform': 'scale(0) translate(-50%, -50%)',
            'background-color': 'transparent',
            'border-radius': '3px',
        },
    },
    'todo-item__checkbox': {
        'display': 'none',
        '&:checked + $todo-item__span::before': {
            'border': '2px solid #5fb8fe',
            'box-shadow': '0 0 10px 3px #5fb8fe',
        },
        '&:checked + $todo-item__span::after': {
            'transform': 'scale(1) translate(-50%, -50%)',
        },
    },
});
export default useStyles;