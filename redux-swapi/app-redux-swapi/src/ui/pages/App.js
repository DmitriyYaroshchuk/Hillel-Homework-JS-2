import "../../fonts.css";
import "../../reset.css";
import {Provider} from "react-redux";
import {store} from "../../engine/init/store";
import SwapiContainer from "../containers/Container/SwapiContainer";


function App() {

    return (
        <Provider store={store}>
            <SwapiContainer/>
        </Provider>

    );
}

export default App;
