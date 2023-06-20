import Loader from "../Loader/Loader";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import {swapiActions, swapiSelectors} from "../../../engine/core/swapiSlice";


export default function Result (props) {
    const classes = useStyles(props);
    const response = useSelector(swapiSelectors.data);
    const id = useSelector(swapiSelectors.id);
    const content = useSelector(swapiSelectors.content);
    const dispatch = useDispatch();
    const clearInfo = () => {
        dispatch(swapiActions.setLink(undefined))
        dispatch(swapiActions.setData(undefined))
    }

    return (
        <div className={`${classes["swapi-result"]}`}>
            <div className={`${classes["swapi-result__container"]}`}>
                <Loader/>
                <div className={`${classes["swapi-result__info"]}`}>
                    {id && <div className={`${classes["swapi-result__id"]}`}>{id}</div>}
                    {content && (
                        <div className={`${classes["swapi-result__controller"]}`}>{content}</div>)
                    }
                </div>
                <pre className={`${classes["swapi-result__code"]}`}>{JSON.stringify(response, null, 2)}</pre>
                {
                    response ? <button className={`${classes["swapi-result__button"]}`} onClick={clearInfo}>Clear</button> : undefined
                }
            </div>
        </div>
    )
}