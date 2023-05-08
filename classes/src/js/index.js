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
        const labelElement = document.createElement('label');
        labelElement.classList.add(`form__label`);
        const inputElement = document.createElement('input');
        inputElement.classList.add('form__input');
        inputElement.classList.add(this.classInput);
        inputElement.placeholder = placeholder;
        inputElement.name = this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        inputElement.required = true;
        inputElement.addEventListener('change', (event) => this.value = event.target.value);
        labelElement.appendChild(inputElement);
        this.parentWrapper.appendChild(labelElement);
        return this.parent.appendChild(this.parentWrapper);
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
        const labelElement = document.createElement('label');
        labelElement.classList.add(`form__label`);
        labelElement.classList.add(this.classLabel);
        labelElement.innerHTML = `<p class="form__text">I agree all statements in <a class="form__link" href="#">Terms of service</a></p>`;
        const inputElement = document.createElement('input');
        inputElement.classList.add('form__input');
        inputElement.classList.add('form__input-checkbox');
        inputElement.classList.add(this.classInput);
        inputElement.name = this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        inputElement.required = true;
        inputElement.checked = check;
        inputElement.addEventListener('change', (event) => this.value = event.target.value);
        labelElement.appendChild(inputElement);
        this.parentWrapper.appendChild(labelElement);
        return this.parent.appendChild(this.parentWrapper);
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
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('form__button');
        buttonElement.classList.add('js--form__button');
        buttonElement.name = this.name;
        buttonElement.type = this.type;
        buttonElement.value = this.value;
        buttonElement.textContent = 'Register';
        buttonElement.addEventListener('click', getInfo);
        this.parentWrapper.append(buttonElement);
        return this.parent.append(this.parentWrapper);
    }
}

const elButton = new ButtonElement('button', 'submit', 'submit',{
    parentWrapper: document.querySelector('.js--form_container'),
    parent: document.querySelector('.js--form'),
});
try {
    function getInfo(event) {
        event.preventDefault();
        console.log('Start...');
        const regExpName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regExpName.test(elName.getValue())) {
            elName.showName();
            console.log('Value-Name: ', elName.getValue());
        } else {
            console.error('Проверьте парвильность ввода поля Имя');
        }

        const regExpMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        if (regExpMail.test(elMail.getValue())) {
            elMail.showName();
            console.log('Value-Mail: ', elMail.getValue());
        } else {
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
elButton.createField();




// function getInfo(event) {
//     event.preventDefault();
//     console.log('Value-Name: ', elName.getValue());
//     console.log('Value-Mail: ', elMail.getValue());
//     console.log('Value-Password: ', elPassword.getValue());
//     console.log('Value-PasswordRepeat: ', elPasswordRepeat.getValue());
//     console.log('Value-Checkbox: ', elCheckbox.getValue());
//     console.log('Value-Button: ', elButton.getValue());
// }
