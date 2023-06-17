import Loader from "./Loader";

export default function Result () {
    return (
        <div className="swapi-result">
            <div className="swapi-result__container">
                <Loader/>
                <div className="swapi-result__info">
                    <div className="swapi-result__id"></div>
                    <div className="swapi-result__controller"></div>
                </div>
                <pre className="swapi-result__code"></pre>
            </div>
        </div>
    )
}