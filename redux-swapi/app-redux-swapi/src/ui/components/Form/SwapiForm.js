import useStyles from "./useStyles";
import {Field, Form} from "react-final-form";




export default function SwapiForm(props) {
    const {formRef, onSubmit} = props;
    const classes = useStyles(props);
    const required = value => value ? undefined : 'Required field';
    const checkURL = value => (/^\/([a-z]*\/\d+\/)?$/.test(value) ? undefined : 'Invalid URL');
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
