import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'swapi__form': {
        'width': '100%',
        'box-sizing': 'border-box',
        'margin': '0 auto 50px',
        'display': 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
    },
    'swapi__url-span': {
        'font-family': "'Montserrat',sans-serif",
        'font-style': 'normal',
        'font-weight': 400,
        'font-size': '14px',
        'line-height': '120%',
        ' text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.3)',
        'max-width': '160px',
        'width': '100%',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'box-sizing': 'border-box',
        'padding': '15px 0',
        'background-color': '#484e55',
        'border': '1px solid rgba(0, 0, 0, 0.6)',
        'border-radius': '10px 0 0 10px',
        'color': 'white',
    },
    // 'swapi__label': {
    //     'max-width': '755px',
    //     'width': '100%',
    // },
    'swapi__input': {
        'width': '100%',
        'box-sizing': 'border-box',
        'padding': '15px 0 15px 12px',
        'font-family': "'Montserrat',sans-serif",
        'font-style': 'normal',
        'font-weight': 700,
        'font-size': '14px',
        'line-height': '120%',
        'color': '#272b30',
        ' background-color': '#ffffff',
        'border': '1px solid #cccccc',
        'box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
        'transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',

        '&::placeholder': {
            'font-size': '12px',
        },

        '&:focus': {
            'border-color': '#66afe9',
            'outline': 0,
            'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 30px rgba(102, 175, 233, 0.6)',
            'transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
        },
    },


    'swapi__button': {
        'max-width': '72px',
        'width': '100%',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'box-sizing': 'border-box',
        'padding': '14px 0',
        'border-color': 'rgba(0, 0, 0, 0.6)',
        'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.3)',
        'color': '#ffffff',
        'background-color': '#7a8288',
        'border-radius': '0 10px 10px 0',

        '&:hover': {
            'box-shadow': '0 0 20px 2px #4495de',
            'transition': 'background ease-in-out .15s, box-shadow ease-in-out .15s',
            'background-color': '#4495DEFF',
        }
    }
});
export default useStyles;