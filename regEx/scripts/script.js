document.querySelector('button').addEventListener('click', () => {
    let contentOfItem = document.querySelector("input").value;
    const regExp = new RegExp(/[A-Z]\d\W.{8,}/);
    if (regExp.test(contentOfItem)) {
        document.querySelector('input').style.color = 'green';
        document.querySelector('input').style.borderColor = 'green';
        console.log(`Валидация поля ${contentOfItem} прошла успешно`);
    } else {
        document.querySelector('input').style.color = 'red';
        document.querySelector('input').style.borderColor = 'red';
        console.log(`Поле ${contentOfItem} не прошло валидацию`);
    }
});

//A1!abcdefgh