import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    'todo__total-items': {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '110%',
        color: '#f44336',
    },
    'todo__button-clean': {
        backgroundColor: '#f39521',
        padding: '13px 0',
        marginLeft: '15px',
        color: 'white',
        borderRadius: '13px',
    }
});
export default useStyles;