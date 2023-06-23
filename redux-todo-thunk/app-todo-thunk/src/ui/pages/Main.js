import '../../reset.css';
import {Provider} from "react-redux";
import {store} from "../../engine/init/store";
import TodoContainer from "../containers/TodoContainer";
export default function Main() {


    return (
        <Provider store={store}>
            <TodoContainer/>
        </Provider>
    )
}

