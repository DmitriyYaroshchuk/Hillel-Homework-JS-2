import useStyles from "./useStyles";
import cx from "classnames";

export default function Loader(props) {
    const {loader} = props;
    const classes = useStyles(props);
    const className = cx(`${classes['bar']}`, {[customClass]: customClass});
    return (
        <>
            {
                loader ? <div className={`${classes.loader} js--loader`}>
                    <div className={classes.bar1}></div>
                    <div className={classes.bar2}></div>
                    <div className={classes.bar3}></div>
                    <div className={classes.bar4}></div>
                    <div className={classes.bar5}></div>
                    <div className={classes.bar6}></div>
                    <div className={classes.bar7}></div>
                    <div className={classes.bar8}></div>
                    <div className={classes.bar9}></div>
                    <div className={classes.bar10}></div>
                    <div className={classes.bar11}></div>
                    <div className={classes.bar12}></div>
                </div> : undefined
            }
        </>
    )
}