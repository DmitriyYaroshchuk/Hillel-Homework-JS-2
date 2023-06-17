import useStyles from "./useStyles";

export default function Wrapper(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.wrapper}>{props.children}</div>
    )
}