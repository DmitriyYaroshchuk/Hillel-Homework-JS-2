import useStyles from "./useStyles";

export default function InnerContainer(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.swapi}>{props.children}</div>
    )
}