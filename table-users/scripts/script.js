function UserTable({ form, content, userInfo, addButton }) {
    this.init = () => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements.name.value,
                form.elements.phone.value,
                form.elements.age.value,
                );
        });
        addButton.addEventListener('click', () => {
            form.reset();
            form.classList.add('open');
        });
        this.deleteUser()
        this.loadUsers();
    }
    //Данный метод удаляет данные конкретного пользоаптеля
    this.deleteUser = () => {
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('js--btn-delete')) {
                const userID = Number(event.target.closest('tr').dataset.id);
                const userData = JSON.parse(localStorage.getItem('users'));
                userData.splice(0, userData.length, ...userData.filter(item => userID !== item.id));
                localStorage.setItem('users',JSON.stringify(userData));
                event.target.closest("tr").remove();
            }
        });
    }
    //Данный метод создает данные нового пользователя
    this.addUser = (name, phone, age) => {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));

    }
    //Данный метод при перезагрузке страницы подшружает данные из LocalStorage на сайт в таблицу
    this.loadUsers = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user));
        }
    }
    //Создаем шаблон пользователя
    this.userTemplate = (user) => {
        content.insertAdjacentHTML('beforeend',(
            `<tr data-id="${user.id}">`+
                `<td class="userId">${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td>`+
                    `<button class="btn">View</button>`+
                    `<button class="btn">Edit</button>`+
                    `<button class="btn js--btn-delete">Delete</button>`+
                `</td>`+
            `</tr>`

        ))
    }
}
(new UserTable({
    form: document.querySelector('.js--form'),
    content: document.querySelector('.js--content'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
})).init()
