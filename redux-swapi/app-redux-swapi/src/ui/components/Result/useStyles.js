import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'swapi-result': {
        'width': '100%',
        'margin': '0 auto',
        'box-sizing': 'border-box',
        'padding': '20px 0',
        'background-color': '#1c1e22',
        'border': '1px solid #0c0d0e',
        'border-radius': '4px',
        'box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.05)',

    },
    'swapi-result__container': {
        'font-family': "'Montserrat',sans-serif",
        'font-style': 'normal',
        'font-weight': 400,
        'font-size': '14px',
        'line-height': '100%',
        'max-width': '940px',
        'width': '100%',
        'margin': '0 auto',
        'display': 'block',
        'padding': '20px 0 20px 20px',
        'color': '#3a3f44',
        'background-color': '#f5f5f5',
        'border': '1px solid #cccccc',
        'border-radius': '4px',
        ' overflow-y': 'scroll',
        'box-sizing': 'border-box',
    },
    'swapi-result__info': {
        'max-width': '150px',
        'width': '100%',
        'display': 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
        'color': 'white',
    },
    'swapi-result__id': {
        'box-sizing': 'border-box',
        'padding': '8px 0',
        'max-width': '50px',
        'width': '100%',
        'background-color': '#8a9196',
        'border-radius': '10px',
    },

    'swapi-result__controller': {
        'box-sizing': 'border-box',
        'padding': '8px 0',
        'max-width': '85px',
        'width': '100%',
        'background-color': '#8a9196',
        'border-radius': '10px',
    },

    'swapi-result__code': {
        'text-align': 'left',
    },

    'swapi-result__button': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "13px 0",
        boxSizing: "border-box",
        backgroundColor: "#282b30",
        maxWidth: "130px",
        width: "100%",
        color: 'whitesmoke',
        borderRadius: "13px",
        cursor: "pointer",
    }
});
export default useStyles;