import useStyles from "./useStyles";
import {Field, Form} from "react-final-form";
import {swapiActions} from "../../../engine/core/swapiSlice";
import {useDispatch} from "react-redux";
import {useRef} from "react";

export default function SwapiForm(props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const onSubmit = (value) => {
        const link = `${formRef.current.action}${value.urlInput}`;
        dispatch(swapiActions.setLoader(true));
        fetch(link)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                dispatch(swapiActions.setLink(link));
                dispatch(swapiActions.setData(data));
                dispatch(swapiActions.setLoader(false));
            })
            .catch(error => {
                console.error('Error: ', error);
                dispatch(swapiActions.setLink(undefined));
                dispatch(swapiActions.setData(undefined));
                dispatch(swapiActions.setLoader(false));
            })
    }
    const required = value => value ? undefined : 'Required field';
    const checkURL = value => (/^\/[a-z]+\/\d*\/?$/.test(value) ? undefined : 'Invalid URL');
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => {
        return error || validator(value)
    },undefined)
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, pristine,errors}) => (
                <form
                    className={`${classes["swapi__form"]}`}
                    action="https://swapi.dev/api"
                    method="get"
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <span className={`${classes["swapi__url-span"]}`}>https://swapi.dev/api</span>
                        <Field
                            name="urlInput"
                            validate={composeValidators(required, checkURL)}
                        >
                            {({ input, meta }) => (
                                <>
                                    <label className={`${classes["swapi__label"]}`}></label>
                                    <input
                                        className={`${classes["swapi__input"]}`}
                                        placeholder="/people/1/"
                                        type="text"
                                        {...input}
                                    />
                                    { meta.error && meta.touched &&
                                        <span style={{ fontWeight: 400, color: 'red' }}>{meta.error}</span>
                                    }
                                </>
                            )}
                        </Field>
                    <button
                        className={`${classes["swapi__button"]}`}
                        type="submit"
                        disabled={pristine || Object.values(errors).length}
                    >
                        Get info
                    </button>
                </form>
            )}
        />
    )
}
