class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}
class TextElement extends FormElement {
    constructor(name, type, value, params) {
        super(name, type, value);
        const { classInput, parentWrapper, parent } = params;
        this.classInput = classInput;
        this.parentWrapper = parentWrapper;
        this.parent = parent;
    }
    createField(placeholder) {
        const newElement = document.createElement('label');
        newElement.classList.add(`form__label`);
        newElement.innerHTML = `<input class='form__input ${this.classInput}' placeholder="${placeholder}" name="${this.name}"type="${this.type}" value="${this.value}" required>`
        this.parentWrapper.append(newElement);
        return this.parent.append(this.parentWrapper);
    }
}
const elName = new TextElement('name', 'text', '',{
    classInput: 'js--input-name',
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
elName.createField('Введите пожалуйста свое имя');

const elMail = new TextElement('email', 'email', '', {
    classInput: 'js--input-email',
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
elMail.createField('Введите пожалуйста ваш электронный адрес');

const elPassword = new TextElement('password', 'password', '', {
    classInput: 'js--input-password',
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
elPassword.createField('Введите пожалуйста пароль');


const elPasswordRepeat = new TextElement('password-repeat', 'password', '', {
    classInput: 'js--input-password',
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
elPasswordRepeat.createField('Введите пожалуйста повторно пароль');



class CheckboxElement extends FormElement {
    constructor(name, type, value, params) {
        super(name, type, value);
        const { classLabel, classInput, parentWrapper, parent } = params;
        this.classLabel = classLabel;
        this.classInput = classInput;
        this.parentWrapper = parentWrapper;
        this.parent = parent;
    }
    createField(check) {
        const newElement = document.createElement('label');
        newElement.classList.add(`form__label`);
        newElement.classList.add(`${this.classLabel}`);
        newElement.innerHTML = `<input class='form__input form__input-checkbox ${this.classInput}' name="${this.name}" type="${this.type}" value="${this.value}" ${check} required>`+
                            `<p class="form__text">I agree all statements in <a class="form__link" href="#">Terms of service</a></p>`;
        this.parentWrapper.append(newElement);
        return this.parent.append(this.parentWrapper);

    }

}
const elCheckbox = new CheckboxElement('checkbox', 'checkbox', 'agreement', {
    classLabel: 'form__label-checkbox',
    classInput: 'js--input-password',
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
})
elCheckbox.createField(false);




class ButtonElement extends FormElement {
    constructor(name, type, value, params) {
        super(name, type, value);
        const { parentWrapper, parent } = params;
        this.parentWrapper = parentWrapper;
        this.parent = parent;
    }
    createField() {
        const newElement = document.createElement('button');
        newElement.classList.add('form__button');
        newElement.classList.add('js--form__button');
        newElement.setAttribute('onclick', 'getInfo(event)')
        newElement.setAttribute('name',this.name);
        newElement.setAttribute('type', this.type);
        newElement.setAttribute('value', this.value);
        newElement.textContent = 'Register';
        this.parentWrapper.append(newElement);
        return this.parent.append(this.parentWrapper);
    }
}
const elButton = new ButtonElement('button', 'submit', 'submit',{
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
elButton.createField();


try {
    function getInfo(event) {
        event.preventDefault();

        const regExpName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regExpName.test(elName.getValue())) {
            elName.showName();
            console.log('Value-Name: ', elName.getValue());
        } else {
            console.log('Value-Name: ', elName.getValue());
            console.error('Проверьте парвильность ввода поля Имя');
        }

        const regExpMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        if (regExpMail.test(elMail.getValue())) {
            elMail.showName();
            console.log('Value-Mail: ', elMail.getValue());
        } else {
            console.log('Value-Mail: ', elMail.getValue());
            console.error('Проверьте парвильность ввода поля Почта');
        }

        const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
        if (regExpPassword.test(elPassword.getValue())) {
            if (elPassword.getValue() === elPasswordRepeat.getValue()) {
                elPassword.showName();
                console.log('Value-Password: ', elPassword.getValue());
                elPasswordRepeat.showName();
                console.log('Value-PasswordRepeat: ', elPasswordRepeat.getValue());
            } else {
                console.log('Value-Password: ', elPassword.getValue());
                console.log('Value-PasswordRepeat: ', elPasswordRepeat.getValue());
                console.error('Пароли не совпадают');
            }
        } else {
            console.error('Проверьте правильность ввода поля Пароль')
        }

        const checkbox = document.querySelector('input[name="checkbox"]');
        if (checkbox.checked) {
            elCheckbox.showName();
            console.log('Value-Checkbox: ', elCheckbox.getValue());
        } else {
            console.error('Checkbox is not checked');
        }
        elButton.showName();
        console.log('Value-Button: ', elButton.getValue());
    }
} catch (error) {
    console.error(error)
}
