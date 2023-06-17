import Loader from "../Loader/Loader";
import useStyles from "./useStyles";

export default function Result (props) {
    const { loader, id, content, response } = props;
    const classes = useStyles(props);
    return (
        <div className={`${classes["swapi-result"]}`}>
            <div className={`${classes["swapi-result__container"]}`}>
                <Loader loader={loader}/>
                <div className={`${classes["swapi-result__info"]}`}>
                    {id && <div className={`${classes["swapi-result__id"]}`}>{id}</div>}
                    {content && (
                        <div className={`${classes["swapi-result__controller"]}`}>{content}</div>)
                    }
                </div>
                <pre className={`${classes["swapi-result__code"]}`}>{response}</pre>
            </div>
        </div>
    )
}