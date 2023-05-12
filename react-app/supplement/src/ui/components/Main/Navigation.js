import React from "react";
export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link">Главная</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">Услуги</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">О нас</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">Поддержка</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">Контакты</a>
                    </li>
                </ul>
            </nav>
        )
    }
}