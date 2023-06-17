import useStyles from "./useStyles";

export default function Container (props) {
    const classes = useStyles(props);
    return (
        <div className={classes.container}>{props.children}</div>
    )
}