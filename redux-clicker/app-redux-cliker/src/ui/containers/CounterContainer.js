import ValueContainer from "../components/ValueContainer";
import Button from "../components/Button";
import {useDispatch} from "react-redux";
import {decrement, increment} from "../../engine/core/counter/counterSlice"


function CounterContainer() {
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <ValueContainer/>
            <Button onClick={onIncrement} text="+"/>
            <Button onClick={onDecrement} text="-"/>
        </div>
    )
}
export default CounterContainer;