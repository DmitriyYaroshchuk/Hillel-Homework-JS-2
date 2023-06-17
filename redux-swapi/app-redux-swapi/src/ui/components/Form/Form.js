export default function Form() {
    return (
        <form className="swapi__form js--form" action="https://swapi.dev/api" method="get">
            <span className="swapi__url-span js--url-span">https://swapi.dev/api</span>
            <label className="swapi__label" htmlFor="url">
                <input id="url" value="/planets/3/" className="swapi__input js--url-input" type="text"
                       placeholder="/people/1/"/>
            </label>
            <button className="swapi__button  js--button-request">Get info</button>
        </form>
    )
}