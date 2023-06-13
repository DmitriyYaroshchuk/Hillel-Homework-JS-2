import {Provider} from "react-redux";
import {store} from "./engine/init/store";
import CounterContainer from "./ui/containers/CounterContainer";


function App() {
    return (
        <Provider store={store}>
            <CounterContainer/>
        </Provider>
    );
}

export default App;
