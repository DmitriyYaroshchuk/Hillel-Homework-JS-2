import useStyles from "./useStyles";
import cx from "classnames";
import {useSelector} from "react-redux";
import {swapiSelectors} from "../../../engine/core/swapiSlice";

export default function Loader(props) {
    const loader = useSelector(swapiSelectors.loader);
    const classes = useStyles(props);
    const customClass = [
        'bar1',
        'bar2',
        'bar3',
        'bar4',
        'bar5',
        'bar6',
        'bar7',
        'bar8',
        'bar9',
        'bar10',
        'bar11',
        'bar12',
    ];
    return (
        <>
            {
                loader ? (
                    <div className={`${classes.loader} js--loader`}>
                        {customClass.map((className, index) => (
                            <div key={index} className={cx(classes['bar'], classes[className])}></div>
                        ))}
                    </div>
                ) : undefined
            }
        </>
    )
}