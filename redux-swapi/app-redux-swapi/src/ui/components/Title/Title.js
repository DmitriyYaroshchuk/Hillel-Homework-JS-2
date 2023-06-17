import useStyles from "./useStyles";

export default function Title (props) {
    const { text } = props;
    const classes = useStyles(props);
    return (
        <h1 className={`${classes["swapi__title"]}`}>{text}</h1>
    )
}