import {useState} from "react";

export const useFormField = (defaultValue) => {
    const [ value, setValue ] = useState(defaultValue);
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return {
        value,
        onChange
    }
}