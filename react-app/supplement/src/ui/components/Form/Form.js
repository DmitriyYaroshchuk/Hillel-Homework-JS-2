import React from "react";
import LabelInput from "./Label-Input";
export default class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <LabelInput customClass="form__input-name" type="text" name="Name" placeholder="Введите ваше имя"/>
                <LabelInput customClass="form__input-surname" type="text" name="Surname" placeholder="Введите ваше Фамилию"/>
                <LabelInput customClass="form__input-password" type="password" name="Password" placeholder="Введите ваш Пароль"/>
                <button className="form__button">Отправить</button>
            </form>
        )
    }
}