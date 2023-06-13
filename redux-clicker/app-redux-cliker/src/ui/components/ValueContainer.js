import {useSelector} from "react-redux";
import {value} from "../../engine/core/counter/counterSlice"
export default function ValueContainer() {
    const counterValue = useSelector(value)
    return (
        <div style={{fontWeight: '700', fontSize: '25px'}}>
            value: {counterValue}
        </div>
    )
}